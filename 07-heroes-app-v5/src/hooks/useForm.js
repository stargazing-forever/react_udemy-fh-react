import React, { useState } from 'react'

const useForm = (initialState) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setFormValues(initialState);
    }

    return [formValues, handleChange, reset]
}

export default useForm
