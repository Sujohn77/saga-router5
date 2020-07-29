/**
 * Created by kyckyc on 15.11.18.
 */
import React, { Component } from "react";
import { Route, withRouter } from "react-router5";
import { shallowEqualObjects } from "modules/shallowEqual";

// /**
//  *
//  * @param Component
//  * @returns {*|string}
//  */
// function getDisplayName(Component) {
//     return Component.displayName || Component.name || 'Component';
// }
//
// /**
//  *
//  *
//  * @param options
//  */
// export const withSmartRouter = (options = {}) => (WrappedComponent,) => {
//     const {
//         withRef = false,
//         withRoute = false,
//         withMatch = false,
//         withHistory = false,
//         withLocation = false,
//     } = options;
//
//     return class withSmartRouter extends Component {
//         static displayName = `withSmartRouter(${getDisplayName(WrappedComponent)})`;
//         static WrappedComponent = WrappedComponent;
//
//         wrappedInstance = (ref) => {
//             this.wrappedInstance.current = ref;
//         };
//
//         getWrappedInstance() {
//             return this.wrappedInstance.current;
//         }
//
//         render() {
//             return (
//                 <Route
//                     render={({ route, match, history, location }) => {
//                         console.debug(route, match, history, location);
//                         const routeParams = {};
//                         if (withRoute === true) {
//                             routeParams['route'] = route
//                         }
//                         if (withMatch === true) {
//                             routeParams['match'] = match
//                         } else if (withMatch === 'url') {
//                             routeParams['match'] = match.url
//                         }
//                         if (withHistory) {
//                             routeParams['history'] = history
//                         }
//                         if (withLocation) {
//                             routeParams['location'] = location
//                         }
//                         return (
//                             <WrappedComponent
//                                 {...{
//                                     ...this.props,
//                                     ...routeParams
//                                 }}
//                                 ref={withRef ? this.wrappedInstance : null}
//                             />
//                         );
//                     }}
//                 />
//             )
//         }
//
//     }
// };

export const stableRoute = (WrappedComponent) => {
    return class StableRoute extends Component {
        static WrappedComponent = WrappedComponent;
        state = {
            match: {},
            matchParams: {},
        };

        static getDerivedStateFromProps(props, state) {
            if (state === {}) {
                return null;
            }
            let { router } = props;
            let match = router.getState();
            let { params = {} } = router.getState();

            delete match.params;

            let matchEquality = shallowEqualObjects(state.match, match);
            let paramsEquality = shallowEqualObjects(state.matchParams, params);
            if (!matchEquality || !paramsEquality) {
                return {
                    match,
                    matchParams: params,
                };
            }
            return null;
        }

        render() {
            let { router, ...props } = this.props;
            let match = router.getState();
            return (
                <WrappedComponent
                    match={this.state.match}
                    matchParams={match.params}
                    router={router}
                    {...props}
                />
            );
        }
    };
};

export const injectRoute = (WrappedComponent) =>
    withRouter(stableRoute(WrappedComponent));
