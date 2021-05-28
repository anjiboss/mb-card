import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Routes
import Navbar from "./Components/Navbar";

import Home from "./Routes/Home";
import People from "./Routes/People";
import Person from "./Routes/Person";
import Error from "./Routes/Error";

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          {/* Only the first one match is displayed */}

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/people">
            <People></People>
          </Route>

          <Route path="/person/:id" children={<Person></Person>}></Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
