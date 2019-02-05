import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import User from "./User";
import Topics from "./Topics";
import NotFound from "./404";
import Footer from "./Footer";
import Render from "./Render";
import Redirect from "./Redirect";
import NoAuth from "./NoAuth";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/user/" component={User} />
            <Route path="/topics" component={Topics} />
            <Route path="/render" component={Render} />
            <Route path="/Redirect" component={Redirect} />
            <Route path="/unauth" component={NoAuth} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NotFound} />
          </Switch>

          <Route component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
