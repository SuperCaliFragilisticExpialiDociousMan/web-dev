import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import "./tuiter.css";
import whoReducer from "./reducers/who-reducer";
import tuits from "./reducers/tuit-reducer";
import profileReducer from "./reducers/profile-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

import WhoToFollowList from "./WhoToFollowList";

const reducers =
    combineReducers({whoReducer, tuits, profileReducer})
const store = createStore(reducers);

const Tuiter = () => {
    return (
        <Provider store={store}>
        <div className="row mt-2">

                <Outlet/>

        </div>
        </Provider>
    );
};
export default Tuiter;