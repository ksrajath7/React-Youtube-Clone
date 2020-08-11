import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage';
import Subscriptions from './Subscriptions';
import Trending from './Trending';
import SidebarCollapsable from './SidebarCollapsable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        
        <Switch>
          <Route exact path="/" render={
            ()=><div className="app__page">
              <SidebarCollapsable subscriptions={false} home={true} trending={false} />
              <Sidebar  subscriptions={false} home={true} trending={false} />
              <RecommendedVideos/>
          </div>}>
            
          </Route>
          <Route path="/search/:searchTerm" render={
            (props)=><div className="app__page">
              <SidebarCollapsable />
              <Sidebar/>
              <SearchPage a={props.match.params.searchTerm}/></div>} >
          
          </Route>
          <Route path="/Subscriptions" render={
            ()=><div className="app__page">
              <SidebarCollapsable subscriptions={true} home={false} trending={false}  />
              <Sidebar subscriptions={true} home={false} trending={false} />
              <Subscriptions/>
              </div>} >
          
          </Route>
          <Route path="/Home" render={
            ()=><div className="app__page">
              <SidebarCollapsable subscriptions={false} home={true} trending={false} />
              <Sidebar subscriptions={false} home={true} trending={false}/>
              <RecommendedVideos/>
              </div>} >
          
          </Route>
          <Route path="/Trending" render={
            ()=><div className="app__page">
              <SidebarCollapsable subscriptions={false} home={false} trending={true} />
              <Sidebar subscriptions={false} home={false} trending={true} />
              <Trending/>
              </div>} >
          
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
