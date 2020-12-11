import { useContext, useEffect, useState } from "react";
import {GlobalContext} from '../../context/Provider';
import { register } from '../../context/actions/auth/register';
import { useHistory } from "react-router-dom";

export default () => {

    const [form, setForm] = useState({});
    const [fieldErrors, setfieldErrors] = useState({});

    const history = useHistory();

    const { authDispatch, 
        authState: 
        {
            auth: {
                loading, error, data
            }
        } 
    } = useContext(GlobalContext);

    useEffect(()=> {

        if(error){
            for(const item in error){
                setfieldErrors({...fieldErrors, [item]:error[item][0]})
            }
        }

    }, [error]);

    useEffect(() => {

        if(data){
            history.push("/auth/login");
        }

    },[data]);

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    };

    console.log('form', form);

    const registerFormValid = 
    !form.username?.length||
    !form.firstName?.length||
    !form.lastName?.length||
    !form.email?.length||
    !form.password?.length;

    const onSubmit = () => {
        setfieldErrors({});
        register(form)(authDispatch);
    };

    return {form, onChange, loading, fieldErrors, registerFormValid, onSubmit};
};