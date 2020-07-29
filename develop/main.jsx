import React, { createElement } from "react";
import { routeNode } from "react-router5";
import { withRouter } from "react-router-dom";
import { injectReducer } from "redux-injector";
import { store } from "store";
class Main extends React.Component {
    state = {
        initalized: false,
    };
    componentDidMount() {
        const { route, dispatch } = this.props;
        route.reducer && store.injectReducer(route.level, route.reducer);
/*         route.saga && store.injectSaga(route.level, route.saga);
        route.action && dispatch(route.action()); */
        this.setState({ initalized: true });
    }
    render() {
        let { route } = this.props;
        let { initalized } = this.state;
        let segment = route && route.name.split(".")[0];

        if (!route || !initalized) return null;

        return route.component ? (
            createElement(route.component)
        ) : (
            <div>NotFound</div>
        );
    }
}

export default routeNode("")(Main);
