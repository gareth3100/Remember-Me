import React, {useState, useContext} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import RegisterComponent from '../../components/Signup';
import { LOGIN } from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';


const Register = () => {
    const [form, setForm] = useState({});
    const {navigate} = useNavigation();
    const [errors, setErrors] = useState({});
    const {
      authDispatch,
      authState: {error, loading, data},
    } = useContext(GlobalContext);

    useFocusEffect(
      React.useCallback(() => {
        return () => {
          if (data || error) {
            clearAuthState()(authDispatch);
          }
        };
      }, [data, error]),
    );

    const onChange = ({name, value}) => {
        setForm({...form, [name]: value});
    
        if (value !== '') {
          if (name === 'password') {
            if (value.length < 6) {
              setErrors((prev) => {
                return {...prev, [name]: 'This field needs min 6 characters'};
              });
            } else {
              setErrors((prev) => {
                return {...prev, [name]: null};
              });
            }
          } else {
            setErrors((prev) => {
              return {...prev, [name]: null};
            });
          }
        } else {
          setErrors((prev) => {
            return {...prev, [name]: 'This field is required'};
          });
        }
    };

    const onSubmit = () => {
        //validations
        if(!form.firstName){
            setErrors((prev)=>{
                return{...prev,firstName:'Please provide a first name'};
            });
        }

        if(!form.lastName){
            setErrors((prev)=>{
                return{...prev,lastName:'Please provide a last name'};
            });
        }

        if(!form.email){
            setErrors((prev)=>{
                return{...prev,email:'Please provide an email'};
            });
        }

        if(!form.password){
            setErrors((prev)=>{
                return{...prev,password:'Please provide a password'};
            });
        }

        //This ensures that the items on the register page are all field and properly filled.
        if(Object.values(form).length === 4 &&
           Object.values(form).every((item) => item.trim().length>0) &&
           Object.values(errors).every((item) => !item)
        ) {
            register(form)(authDispatch)((response) => {
              navigate(LOGIN, {data: response});
            });
        }
    }

    return(
        <RegisterComponent 
          onSubmit={onSubmit} 
          onChange={onChange} 
          form={form} 
          errors={errors}
          error={error}
          loading={loading}
        />
    );
};

export default Register;