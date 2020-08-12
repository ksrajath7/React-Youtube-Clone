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
import ThemeContext, { themes } from './theme-context'

function App() {
  
  let themeValue = themes.light
  const [darkTheme, setTheme] = React.useState(false)
  if(darkTheme){
    themeValue = themes.dark
  }
  else{
    themeValue = themes.light
  }
  
  return (

      <ThemeContext.Provider value={themeValue}>

    <div className="App">
      <BrowserRouter>
        <Header theme={darkTheme} setTheme={setTheme}/>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={
            ()=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <SidebarCollapsable subscriptions={false} home={true} trending={false} />
              <Sidebar  subscriptions={false} home={true} trending={false} />
              <RecommendedVideos/>
          </div>}>
            
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/search/:searchTerm`} render={
            (props)=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <SidebarCollapsable />
              <Sidebar/>
              <SearchPage a={props.match.params.searchTerm}/></div>} >
          
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Subscriptions`} render={
            ()=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <SidebarCollapsable subscriptions={true} home={false} trending={false}  />
              <Sidebar subscriptions={true} home={false} trending={false} />
              <Subscriptions/>
              </div>} >
          
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Home`} render={
            ()=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <SidebarCollapsable subscriptions={false} home={true} trending={false} />
              <Sidebar subscriptions={false} home={true} trending={false}/>
              <RecommendedVideos/>
              </div>} >
          
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Trending`} render={
            ()=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <SidebarCollapsable subscriptions={false} home={false} trending={true} />
              <Sidebar subscriptions={false} home={false} trending={true} />
              <Trending/>
              </div>} >
          
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
