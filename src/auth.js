import react from "react";

import { Route, Redirect } from "react-router-dom";


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