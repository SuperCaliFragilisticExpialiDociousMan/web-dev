import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap-5.1.3-dist/bootstrap.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.css';
import './vendors/fontawesome-free-5.15.4-web/css/all.min.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.css';
import './vendors/fontawesome-free-5.15.4-web/css/fontawesome.min.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/labs"]} exact={true}>
                  <Labs/>
              </Route>
              <Route path="/tuiter" exact={true}>
                  <Tuiter/>
              </Route>

              <Route path="/tuiter/explore" component={ExploreScreen}/>
              <Route path="/tuiter/home" component={HomeScreen}/>



          </div>
      </BrowserRouter>



  );
}
export default App;


