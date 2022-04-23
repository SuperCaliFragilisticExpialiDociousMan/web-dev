import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import "./tuiter.css";
import whoReducer from "./reducers/who-reducer";
import tuits from "./reducers/tuit-reducer";
import profile from "./reducers/profile-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";


const reducers =
    combineReducers({whoReducer, tuits, profile})
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
