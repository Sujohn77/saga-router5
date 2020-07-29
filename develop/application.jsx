import React from "react";
import Nav from "./components/nav/Nav.jsx";
import Main from "./main.jsx";

import { fetchPosts } from "./redux/posts/actions";
import { connect } from "react-redux";
import LangSwitcher from "./components/langSwitcher/LangSwitcher.jsx";

@connect(null, { fetchPosts })
class Application extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        let router = this.props.router;

        return (
            <div className="mail-client">
                <aside>
                    <Nav />
                </aside>

                <main>
                    <Main />
                </main>

                <footer>
                    <LangSwitcher router={router} />
                </footer>
            </div>
        );
    }
}

export default Application;
