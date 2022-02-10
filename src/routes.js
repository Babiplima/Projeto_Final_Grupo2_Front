
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './auth';
import beneficio from './componente/Beneficio/beneficio'
import atividade from './componente/Atividade/atividade';
import DashboardAtividadeFisica from './componente/Atividade/dashboardAtividadeFisica';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/beneficio' component={beneficio}/>
            <Route exact path='/atividade' component={atividade}/>
            <PrivateRoute path='dashboardAtividadeFisica' component={DashboardAtividadeFisica}/>
        </Switch>
    </Router>

);

export default Routes;