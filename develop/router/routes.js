import React, { lazy } from "react";
import * as axios from "axios";
import { fetchUsers } from "redux/users/actions";
import { fetchProfiles } from "redux/profiles/actions";

const Posts = () =>
    import("routes/PostPage").then((module) => {
        debugger;
        return { level: "postsPage", module };
    });
const Profiles = () =>
    import("routes/ProfilesPage").then((module) => {
        return { level: "profilesPage", module };
    });
const Users = () =>
    import("routes/UsersPage").then((module) => {
        return { level: "usersPage", module };
    });

export default [
    {
        name: "posts",
        path: "/posts?:lang",
        loadComponent: Posts,
    },
    {
        name: "profiles",
        path: "/profiles?:lang",
        action: fetchProfiles,
        loadComponent: Profiles,
    },
    {
        name: "users",
        path: "/users?:lang",
        action: fetchUsers,
        loadComponent: Users,
    },
];
