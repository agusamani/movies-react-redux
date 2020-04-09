import React from "react";

import List from "./components/List/List";
import Post from "./components/Post/Post";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
      <div id="bodyContainer">
          <NavBar />
          <Route exact path="/" component={Post} />
          <Route path="/favs" component={List} />
          <Route path="/movie/:id" component={Movie} />
      </div>
  );
}

export default App;
