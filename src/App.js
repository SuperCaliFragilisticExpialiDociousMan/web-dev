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
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import {BrowserRouter, Route} from "react-router-dom";
import { BrowserRouter as Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>

                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;


