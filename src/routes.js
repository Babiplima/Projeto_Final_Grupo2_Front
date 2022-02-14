/* eslint-disable react/jsx-no-undef */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth';
import Login from "./componente/Usuario/login";
import CadastrarUsuario from './componente/Usuario/CadastrarUsuario';
import DashboardUsuario from './componente/Usuario/DashboardUsuario'
import CadastrarFuncionario from './componente/Funcionario/CadastrarFuncionario';
import DashboardFuncionario from './componente/Funcionario/DashboardFuncionario';
import Beneficio from './componente/Beneficio/beneficio';
import DashboardBeneficio from './componente/Beneficio/dashboardBeneficio';
import DashboardAtividadeFisica from './componente/Atividade/dashboardAtividadeFisica';
import Atividade from './componente/Atividade/atividade';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboardUsuario' component={DashboardUsuario}/>
            <PrivateRoute path='/dashboardFuncionario' component={DashboardFuncionario}/>
            <PrivateRoute path='/cadastrarFuncionario' component={CadastrarFuncionario}/>
            <Route exact path='/cadastrarUsuario' component={CadastrarUsuario}/>
            <Route exact path='/beneficio' component={Beneficio} />
            <Route exact path='/dashboardBeneficio' component={DashboardBeneficio} />
            <Route exact path='/atividade' component={Atividade} />
            <Route exact path='/dashboardAtividade' component={DashboardAtividadeFisica} />
        </Switch>
    </Router>

);

export default Routes;