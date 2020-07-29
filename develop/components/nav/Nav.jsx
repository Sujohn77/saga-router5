import React from "react";
import { BaseLink, withRoute } from "react-router5";
import { injectIntl } from "react-intl";
import "./Nav.css";
import { render } from "react-dom";

@injectIntl
class Nav extends React.Component {
    render() {
        let { router } = this.props;
        let { formatMessage } = this.props.intl;

        let textPosts = formatMessage({ id: "app.menu.posts" });
        let textProfiles = formatMessage({ id: "app.menu.profiles" });
        let textUsers = formatMessage({ id: "app.menu.users" });

        return (
            <nav>
                <BaseLink
                    router={router}
                    routeName="posts"
                    routeOptions={{ reload: true }}
                >
                    {textPosts}
                </BaseLink>

                <BaseLink router={router} routeName="profiles">
                    {textProfiles}
                </BaseLink>

                <BaseLink router={router} routeName="users">
                    {textUsers}
                </BaseLink>
            </nav>
        );
    }
}

export default withRoute(Nav);
