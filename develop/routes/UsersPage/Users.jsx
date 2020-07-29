import React from "react";

import { routeNode } from "react-router5";
import { connect } from "react-redux";
import { loadUsers } from "redux/users/actions";

const mapStateToProps = (state) => {
    return {
        users: state.application.usersPage.users,
    };
};

@connect(mapStateToProps, { loadUsers })
class Users extends React.Component {
    render() {
        let { users } = this.props;

        let usersItems =
            users &&
            Object.values(users).map((user, key) => (
                <div key={key}>
                    <h3>{user.name}</h3>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                </div>
            ));

        return <div className="users">{usersItems}</div>;
    }
}

export default routeNode("users")(Users);
