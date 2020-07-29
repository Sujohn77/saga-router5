import ReactDOM from "react-dom";
import React from "react";
import Application from "./application.jsx";
import { RouterProvider } from "react-router5";
import createRouter from "./router/create-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./store";

import { createBrowserHistory } from "history";
import { LocalePreloader } from "./modules/localizator/LocalePreloader.jsx";

const router = createRouter(true);

const App = (
    <Provider store={store}>
        <RouterProvider router={router} history={createBrowserHistory}>
            <LocalePreloader>
                <Application router={router} />
            </LocalePreloader>
        </RouterProvider>
    </Provider>
);

router.start(() => {
    ReactDOM.render(App, document.getElementById("app"));
});
