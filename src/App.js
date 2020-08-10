import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <div className="app__page">
              <Sidebar/>
              <RecommendedVideos/>
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app__page">
                <Sidebar/>
                <SearchPage/>
              </div>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
