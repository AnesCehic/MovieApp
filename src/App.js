import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import TvShows from './components/tvshows';
import Movies from './components/movies';
import Detalji from './components/detalji';
import DetaljiShow from './components/detaljiTv';


import Switch from 'react-router-dom/Switch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={TvShows} />
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={Detalji} />
            <Route path="/tvShow/:id" component={DetaljiShow} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
