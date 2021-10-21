import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../pages/hooks/useAuth';
import useFirebase from '../../pages/hooks/useFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();
    if(isLoading){
        return <Spinner animation="border" />
    }
    console.log(user)
    return (
        <Route
            {...rest}
            render={({location}) => user.email ? children : 
            <Redirect
            to= {{
                pathname: '/login',
                state: {from: location}
            }}
            ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;