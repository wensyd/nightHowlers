import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home/home";

import NotFound from "./pages/notfound";
import About from "./about";


import BlogGrid from "./blog/bloggrid";
import BlogSingle from "./blog/blogsingle";

function MainNavigation() {

  return (
    <Router>
      <Switch>
        {/** Home */}
        <Route path="/" exact={true} component={Home} />

        <Route path="/home" exact={true} component={Home} />
       
        <Route path="/notfound" exact={true} component={NotFound} />
    
        <Route path="/about" exact={true} component={About} />
       
        {/** Blog */}
        <Route path="/blog" exact={true} component={BlogGrid} />

        <Route path="/blogsingle" exact={true} component={BlogSingle}/>
        {/** invalid routes redirection */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default MainNavigation;
