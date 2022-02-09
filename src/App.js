import React, {Component} from "react";
import "./App.css"
import DashboardFuncionario from "./componente/Funcionario/DashboardFuncionario";
import DashboardUsuario from "./componente/Usuario/DashboardUsuario";


export default class App extends Component {
    render(){
        return(
           <div className="App">
               <DashboardFuncionario/>
           </div>
        );
    }
}