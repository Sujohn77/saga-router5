import { postsPage as reducer } from "./reducers";
import { sagaPostsWatcher as saga } from "./sagas";
import { default as component } from "./Posts.jsx";
export { reducer, saga, component };
