/**
 * Created by kyckyc on 12.10.18.
 */
import React from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
// import XRegExp from 'xregexp';
import { bindActionCreators } from "redux";

import { withRouter } from "react-router5";
import { setLanguage, setPlatform } from "./actions";

import PropTypes from "prop-types";
import { hashFnv32a } from "helpers.js";
export const LocaleContext = React.createContext("en");

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ setLanguage, setPlatform }, dispatch),
        dispatch,
    };
};

const mapStateToProps = (state) => {
    return {
        lang: state.application.language,
    };
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class LocalePreloader extends React.Component {
    /**
     *
     */
    static contextTypes = {};
    static propTypes = {
        onLangChange: PropTypes.object,
    };

    static defaultProps = {
        onLangChange: {},
    };

    static mixins = [];
    static langXP = RegExp("^/(ru)/.*?$");

    state = {
        currentLanguage: null,
        nextLanguage: null,
        nextLocation: null,
        currentLocation: null,
        bootstraped: false,
        location: null,
    };

    localeMessages = {};
    polyfillPluralRequired = false;
    polyfillRelativeTimeRequired = false;

    constructor(props) {
        super(props);
    }

    static extractLocale(pathname) {
        // // console.debug(`[LP] Extracting locale, pathname: ${pathname}`);
        const result = pathname.match(LocalePreloader.langXP);
        if (!!result) {
            return { lang: result[1], pathname: pathname.substr(3) };
        }
        return { lang: "en", pathname };
    }

    /**
     * Invoked after a component is instantiated as well as before it is re-rendered
     * It can return an object to update state, or null to indicate that the new props do not require any state updates.
     * @param props
     * @param state
     */
    static getDerivedStateFromProps(props, state) {
        if (state === {}) {
            return null;
        }
        let router = { ...props.router };
        let location = router.getState();
        // NEED TO FIX
        if (!location) {
            return {
                currentLanguage: "en",
                nextLanguage: "en",
                currentLocation: "en",
                nextLocation: "en",
            };
        }

        let lang = location.params?.lang ? location.params.lang : props.lang;

        location.key = hashFnv32a(location.path + "/" + lang);
        // // console.debug(props.location);
        if (state.currentLanguage == null) {
            // in case of bootstrapping
            // console.debug('[LP] Derived, bootstrapping state.');
            return {
                currentLanguage: lang,
                nextLanguage: lang,
                currentLocation: location,
                nextLocation: location,
            };
        }
        if (state.nextLanguage !== lang) {
            // console.debug(`[LP] Update nextLanguage and location: ${lang} | ${location.pathname}`);
            return {
                nextLanguage: lang,
                nextLocation: location,
            };
        }
        // console.debug(`[LP] Update only the next location: ${props.location.pathname}`);
        return {
            nextLocation: location,
        };
    }

    async componentDidUpdate() {
        // console.debug('[LP] Did update');
        // console.debug(`[LP] didUpdate, currentLanguage: ${this.state.currentLanguage}, nextLanguage: ${this.state.nextLanguage}`);
        const { nextLanguage, nextLocation } = this.state;
        const newIntlRequired = this.localeMessages[nextLanguage] === undefined;
        // console.debug(this.state.currentLocation);
        // console.debug(this.state.nextLocation);
        const routeChanged =
            this.state.currentLocation.key !== this.state.nextLocation.key;
        if (newIntlRequired) {
            let lang = this.state.nextLanguage;
            // console.debug(`[LP] Require '${lang}' locale.`);
            try {
                let awaitFor = [];
                awaitFor.push(
                    import(
                        /* webpackChunkName: "locale-messages-" */ `locales/${lang}.json`
                    )
                );
                awaitFor.push(this.processHooks(lang));
                if (this.polyfillRelativeTimeRequired) {
                    awaitFor.push(
                        import(
                            /* webpackChunkName: "locale-relative-" */ `./localeData/intl-relativetimeformat/${lang}.js`
                        )
                    );
                }
                if (this.polyfillPluralRequired) {
                    awaitFor.push(
                        import(
                            /* webpackChunkName: "locale-plural-" */ `./localeData/intl-pluralrules/${lang}.js`
                        )
                    );
                }
                const [locale] = await Promise.all(awaitFor);
                this.localeMessages[lang] = locale.default;
            } catch (e) {
                console.warn(e);
                this.props.dispatch(this.props.onError);
                return;
            }
        }
        // Route is changed and requested language is still the same.
        if (routeChanged && nextLanguage === this.state.nextLanguage) {
            this.renderRoute(nextLanguage, nextLocation);
        }
    }

    async processHooks(lang) {
        // console.debug(`generate hooks for lang: ${lang}`);
        let promises = [];
        for (let key in this.props.onLangChange) {
            promises.push(
                new Promise((resolve) => {
                    this.props.dispatch(
                        this.props.onLangChange[key](resolve, lang)
                    );
                })
            );
        }
        return Promise.all(promises)
            .then()
            .catch((error) => {
                console.warn(error);
            });
    }

    renderRoute(nextLanguage, nextLocation) {
        if (this.state.currentLanguage !== nextLanguage) {
            // console.debug('[LP] Updating store with a new language: ', nextLanguage);
            this.props.setLanguage(nextLanguage);
        }
        // console.debug('[LP] Render new language and location: ', nextLanguage, nextLocation);
        this.setState({
            currentLanguage: nextLanguage,
            currentLocation: nextLocation,
        });
    }

    async componentDidMount() {
        // Parsing embed locale.
        let localeMessages = JSON.parse(
            document.getElementById("application-locale-messages").innerText
        );
        let langCode = localeMessages.lang;
        this.localeMessages[langCode] = localeMessages.messages;
        // Reject browsers without Intl support
        // Add polyfill ?
        if (!global.Intl) return;

        // Polyfills for plural and relative time.
        let awaitFor = [];
        if (!Intl.PluralRules) {
            this.polyfillPluralRequired = true;
            awaitFor.push(
                import(
                    /* webpackChunkName: "polyfillIntlPlurals" */ "@formatjs/intl-pluralrules/polyfill"
                ).then(() =>
                    import(
                        /* webpackChunkName: "locale-plural-" */ `./localeData/intl-pluralrules/${langCode}.js`
                    )
                )
            );
        }
        if (!Intl.RelativeTimeFormat) {
            this.polyfillRelativeTimeRequired = true;
            awaitFor.push(
                import(
                    /* webpackChunkName: "polyfillIntlRelativeTime" */ "@formatjs/intl-relativetimeformat/polyfill"
                ).then(() =>
                    import(
                        /* webpackChunkName: "locale-relative-" */ `./localeData/intl-relativetimeformat/${langCode}.js`
                    )
                )
            );
        }
        await Promise.all(awaitFor);
        this.props.setLanguage(langCode);
        this.setState({
            bootstraped: true,
        });
        // App is rendered at this point.
    }

    render() {
        const { children } = this.props;
        const { currentLocation, currentLanguage, bootstraped } = this.state;

        // console.debug(`[LP] render: pathname: ${!!currentLocation ? currentLocation.pathname : null}, currentLanguage: ${currentLanguage}`);
        if (!bootstraped) {
            return null;
        }
        // use a controlled <Route> to trick all descendants into
        // rendering the old location
        return (
            <LocaleContext.Provider value={currentLanguage}>
                <IntlProvider
                    locale={currentLanguage}
                    messages={this.localeMessages[currentLanguage]}
                >
                    {children}
                </IntlProvider>
            </LocaleContext.Provider>
        );
    }
}

export { LocalePreloader };
