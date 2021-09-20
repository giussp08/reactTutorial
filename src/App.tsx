import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import Project from "./pages/projectPage/search/Project";
import Page1 from "./pages/search/Page1";
import GetTable from "./table/GetTable";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import GetPersonDataDetail from "./pages/personDataDetail/GetPersonDataDetail";
import GetPerson from "./pages/person/GetPerson";
import GetCv from "./pages/cv/GetCv";
import Practice from "./pages/projectPage/practice/Practice";
import TabPanel from "./pages/projectPage/practice/component/TabPanel";


export default function App() {
return (
    <Router>
      <div>
       

        
        <Switch>
          <Route exact path="/" render={() =>{ return <Redirect to="/login"/>}}/>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/table">
            <GetTable />
          </Route>
          <Route exact path="/person" >
            <GetPersonDataDetail />
          </Route>
          <Route exact path="/personal">
            <GetPerson />
            </Route>
          <Route exact path="/cv">
            <GetCv />
          </Route>
          <Route exact path="/practice">
            <Practice />
          </Route>
     
          <Route exact path="/page5">
            <Page5 />
          </Route>
          <Route exact path="/page6">
            <Page6 />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}