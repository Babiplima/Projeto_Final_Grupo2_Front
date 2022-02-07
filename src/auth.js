
import React from "react";
import { Route, Navigate } from "react-router-dom";


const isAuth = () => {
    if(localStorage.getItem('token') !== null){
        return true
    }
    return false;
}

const PrivateRoute = ({component:Component, ...rest})=>{
    return (
        <Route
        {...rest}
        render={props =>
            isAuth()?(
                <Component{...props}/>
            ): (
                <Navigate
                to={{
                    pathname: '/',
                    state:{message:'Usuário não autorizado'}
                }}
                />
            )}
        />
    );
}

export default PrivateRoute;