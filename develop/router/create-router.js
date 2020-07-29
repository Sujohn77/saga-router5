import createRouter from "router5";
import loggerPlugin from "router5-plugin-logger";
import listenersPlugin from "router5-listeners";
import browserPlugin from "router5-plugin-browser";
import routes from "./routes";
import { reduxPlugin } from "redux-router5";

import { store } from "../store";
import { fetchDataMiddleware } from "./middlewares/fetchDataMiddleware";
import historyPlugin from "router5-history";
import { Router5 } from "router5";

export default function configureRouter(useListenersPlugin = false) {
    const router = createRouter(routes, {
        defaultRoute: "ru/posts",
        queryParamsMode: "default",
        trailingSlashMode: "default",
        strictTrailingSlash: false,
        caseSensitive: false,
        urlParamsEncoding: "default",
    });

    router.options = {};
    router.setDependency("store", store);
    router.usePlugin(
        reduxPlugin(store.dispatch),
        loggerPlugin,
        browserPlugin({
            useHash: false,
        })
    );

    if (useListenersPlugin) {
        router.usePlugin(listenersPlugin());
    }

    router.useMiddleware(fetchDataMiddleware(routes));

    return router;
}
