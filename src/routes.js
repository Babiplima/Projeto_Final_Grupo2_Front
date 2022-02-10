/* eslint-disable react/jsx-no-undef */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth';
import Login from "./componente/Usuario/login";
import CadastrarUsuario from './componente/Usuario/CadastrarUsuario';
import DashboardUsuario from './componente/Usuario/DashboardUsuario'
import CadastrarFuncionario from './componente/Funcionario/CadastrarFuncionario';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboardUsuario' component={DashboardUsuario}/>
            <PrivateRoute path='/cadastrarFuncionario' component={CadastrarFuncionario}/>
            <Route exact path='/cadastrarUsuario' component={CadastrarUsuario}/>
        </Switch>
    </Router>

);

export default Routes;