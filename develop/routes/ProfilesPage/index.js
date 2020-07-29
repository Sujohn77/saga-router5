import { profilesPage as reducer } from "./reducers";
import { sagaProfilesWatcher as saga } from "./sagas";
import { default as component } from "./Profiles.jsx";
import { fetchProfiles as action } from "./actions.js";
export { reducer, saga, component, action };
