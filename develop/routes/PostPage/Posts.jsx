import React from "react";

import { routeNode } from "react-router5";
import { posts } from "redux/posts/reducers";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.application.postsPage.posts,
    };
};

@connect(mapStateToProps)
class Posts extends React.Component {
    render() {
        let { posts } = this.props;

        let postsItems =
            posts &&
            posts.map((post, key) => (
                <div key={key}>
                    <h3>{post.title}</h3>
                    <div>{post.body}</div>
                </div>
            ));

        return <div className="posts">{postsItems}</div>;
    }
}

export default routeNode("posts")(Posts);
