import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.min.css';
import './vendors/fontawesome-free-6.1.0-web/css/all.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import ExploreScreen from "./components/Tuiter/explore-screen/index";
import HomeScreen from "./components/Tuiter/home-screen/index";
import ProfileScreen from "./components/Tuiter/profile/index";
import EditProfileScreen from "./components/Tuiter/editprofile/index";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/"
                           element={<Labs/>}/>
                    <Route path="/labs"
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}>
                        <Route path="home"
                               element={<HomeScreen/>}/>
                        <Route path="explore"
                               element={<ExploreScreen/>}/>
                        <Route path="profile"
                               element={<ProfileScreen active="profile"/>}/>
                        <Route path="editprofile"
                               element={<EditProfileScreen/>}/>
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    );
}




export default App;


