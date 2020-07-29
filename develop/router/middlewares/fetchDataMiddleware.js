import { actionTypes } from "redux-router5";
import transitionPath from "router5-transition-path";
import { fetchUsers } from "../../redux/users/actions";

import { store } from "store";

export const fetchDataMiddleware = (routes) => (router, dependencies) => (
    toState,
    fromState,
    done
) => {
    const { toActivate } = transitionPath(toState, fromState);
    const isLoadedComponent = fromState && fromState.component;
    const currentSegment = toActivate
        .map((segment) => routes.find((r) => r.name === segment))
        .filter(Boolean);

    return Promise.all(
        currentSegment.map((node) => {
            if (!isLoadedComponent) {
                return node.loadComponent();
            }
        })
    ).then(async (result) => {
        let { module } = result[0];

        if (!result[0]) {
            return { ...fromState };
        }

        module.saga && store.injectSaga(result[0].level, module.saga);
        module.action && dispatch(module.action());
        /*         if (node && node.action) {
            dependencies.store.dispatch(node.action(toState.params));
        } */

        if (module.component.default) {
            return {
                ...toState,
                component: module.component.default,
                level: result[0].level,
                reducer: module.reducer,
                saga: module.saga,
            };
        }

        return {
            ...toState,
            component: module.component,
            level: result[0].level,
            reducer: module.reducer,
            saga: module.saga,
        };
    });
};
