import react from "react";

import { Route, Redirect } from "react-router-dom";


// Aqui verifica se o usuario esta autenticado 
const isAuth = () => {
    if(localStorage.getItem('token') !== null){
        return true
    }
    return false;
}

// Aqui o usuário é redirecionado caso ele esteja autenticado ou não


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => 
            isAuth() ? (
                <Component {...props} />
            ): (
                <Redirect 
                    to={{
                        pathname: '/',
                        state: { message: 'Usuário não autorizado' }
                    }}
                />
            )}
        />
    );
}

export default PrivateRoute;