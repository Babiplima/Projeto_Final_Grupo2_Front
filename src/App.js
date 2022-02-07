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

import React from "react";
import Login from "./componente/Usuario/login";
import './App.css'


function App() {
 return(
    <div className="App">
        <Login/>
    </div>
 );
}

export default App;