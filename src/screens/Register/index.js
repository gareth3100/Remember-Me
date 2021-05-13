import React from 'react';

import { Text, View } from 'react-native';
import { useState } from 'react/cjs/react.production.min';
import RegisterComponent from '../../components/Signup';

const Signup = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = ({name, value}) => {
        setForm({...form, [name]: value});
    };

    const onSubmit = () => {
        // validations
        console.log('form')
    }

    return (
        <RegisterComponent 
            onSubmit = {onSubmit}
            onChange = {onChange}
            form = {form}
            errors ={error}
        />
    );
};

export default Signup