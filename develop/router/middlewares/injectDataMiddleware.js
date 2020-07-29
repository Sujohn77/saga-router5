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
            if (node && node.action) {
                dependencies.store.dispatch(node.action(toState.params));
            }
            if (!isLoadedComponent) {
                return node.loadComponent();
            }
        })
    ).then(async (result) => {
        result = result[0];
        if (!result) {
            return { ...fromState };
        }

        let component;
        let { module } = result;

        if (module.component.default) {
            component = module.component.default;
        } else {
            component = module.component;
        }

        return {
            ...toState,
            component,
            level: result.level,
            reducer: module.reducer,
            saga: module.saga,
        };
    });
};
