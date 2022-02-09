import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './auth';
import beneficio from './componente/Beneficio/beneficio';
import atividade from './componente/Atividade/atividade';
import dashboardBeneficio from './componente/Beneficio/dashboardBeneficio';


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/beneficio' component={beneficio}/>
            <PrivateRoute path='/dashboardBeneficio' component={dashboardBeneficio}/>
            <Route exact path='/atividade' component={atividade}/>
        </Switch>
    </Router>

);

export default Routes;