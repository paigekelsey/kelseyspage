import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import Converge from "./components/elements/Converge";
import Peach from "./components/elements/Peach";
import Port from './components/elements/Port'
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/converge" exact>
          <Converge />
        </Route>
        <Route path="/peach" exact>
          <Peach />
        </Route>
        <Route path="/port" exact>
          <Port />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
