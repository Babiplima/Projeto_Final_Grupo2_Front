import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth';
import page_landing_beneficio from './componente/page_landing_beneficio/index'


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/page_landing_beneficio' component={page_landing_beneficio}/>
        </Switch>
    </Router>

);

export default Routes;