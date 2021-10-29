// write your custom hook here to control your checkout form
import {useState} from 'react';



const useForm = (initialValue) => {
    
    const [values, setValues]= useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage]= useState(false);

    const handleChanges = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        };
        const handleSubmit = (event) => {
            event.preventDefault();
            // console.log(values);
            setShowSuccessMessage(true);
        };


    return [values,showSuccessMessage, handleChanges,handleSubmit];
}

export default useForm; 