import React, {Component} from "react";
import "./App.css"
import CadastrarUsuario from "./componente/Usuario/CadastrarUsuario";



export default class App extends Component {
    render(){
        return(
           <div className="App">
               <CadastrarUsuario/>
           </div>
        );
    }
}