import React, {Component} from "react";
import "./App.css"
import AtualizarUsuario from "./componente/Usuario/DashboardUsuario";
import Login from "./componente/Usuario/login";


export default class App extends Component {
    render(){
        return(
           <div className="App">
             <AtualizarUsuario/>
           </div>
        );
    }
}