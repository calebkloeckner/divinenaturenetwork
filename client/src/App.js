import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
// import Admin from "./pages/Admin";
import Home from "./pages/Home";
// import Live from "./pages/Live";
// import Login from "./pages/Login";
// import Sacraments from "./pages/Sacraments";
import Sermons from "./pages/Sermons";
import Video from "./pages/Video";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Details from "./pages/Details";


const App = () => (
  <Router>
    <div>
    <Nav />
    <Header />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/admin" component={Admin} /> */}
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/live" component={Live} /> */}
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/sacraments" component={Sacraments} /> */}
        <Route exact path="/sermons" component={Sermons} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/video/:id" component={Details} />
        
      </Switch>
     
    </div>
  </Router>
  
);

// const Header = () =>{
  
// }

export default App;
