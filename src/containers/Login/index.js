import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../../context/Provider';

const LoginContainer = () => {

    const { authDispatch, 
        authState: 
        {
            auth: {
                loading, error, data
            }
        } 
    } = useContext(GlobalContext);

    return (
        <div>
            <h1>Login</h1>
            <Link to="/auth/register">Register</Link>
        </div>
    )
}

export default LoginContainer
