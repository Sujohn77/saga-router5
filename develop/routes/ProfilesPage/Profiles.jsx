import React from "react";

import { routeNode } from "react-router5";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        profiles: state.application.profilesPage.profiles,
    };
};

@connect(mapStateToProps)
class Profiles extends React.Component {
    render() {
        let { profiles } = this.props;

        let profileItems =
            profiles &&
            Object.values(profiles).map((profile, key) => (
                <div key={key}>
                    <h3>{profile.first_name}</h3>
                    <div>{profile.last_name}</div>
                    <div>{profile.email}</div>
                    <div>{profile.gender}</div>
                    <div>{profile.ip_address}</div>
                </div>
            ));

        return <div className="profiles">{profileItems}</div>;
    }
}

export default routeNode("profiles")(Profiles);
