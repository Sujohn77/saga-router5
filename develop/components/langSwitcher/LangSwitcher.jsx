/**
 * Created by kyckyc on 19.08.16.
 */
import React from "react";
import { connect } from "react-redux";
import { withLocale } from "modules/localizator";
import { injectRoute } from "modules/preLoader/decorators";
import { injectHistory } from "../../modules/preLoader/decorators";
import { routeNode } from "react-router5";
import { setLanguage } from "modules/localizator/actions";
const languages = {
    en: "English",
    ru: "Russian",
};
@connect(null, { setLanguage })
@withLocale
@injectRoute
class LangSwitcher extends React.PureComponent {
    static propTypes = {};
    static defaultProps = {};

    state = {};

    constructor(props) {
        super(props);
    }

    switchLang(event) {
        let { match, router, setLanguage } = this.props;
        let pathname = match.name;
        let lang = event.target.value;
        let state = router.getState();
        setLanguage(lang);
        debugger;
        router.setState({ ...state, params: { lang: lang } });
        router.navigate(pathname, { lang: lang }, { reload: true });
    }

    render() {
        const currentLang = this.props.lang;
        // console.debug(`[Selector] Current lang ${currentLang}`);
        return (
            <select value={currentLang} onChange={::this.switchLang}>
                {Object.keys(languages).map((lang) => {
                    if (currentLang === lang) {
                        return (
                            <option key={lang} value={lang}>
                                {languages[lang]}
                            </option>
                        );
                    }
                    return (
                        <option key={lang} value={lang}>
                            {languages[lang]}
                        </option>
                    );
                })}
            </select>
        );
    }
}

export default LangSwitcher;
