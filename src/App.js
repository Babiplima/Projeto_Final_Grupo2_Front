import React, {Component} from "react";
import Routes from "./routes.js";
import "./App.css"

export default class App extends Component {
    render(){
        return(
           <div className="App">
               <Routes/>
           </div>
        );
    }
}