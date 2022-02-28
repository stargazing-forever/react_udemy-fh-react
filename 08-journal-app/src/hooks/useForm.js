import { useState } from "react"

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  const resetForm = (newFormState=initialState) => {
    setFormValues(newFormState);
  }

  return {
    formValues,
    handleChange,
    resetForm
  }
}

export default useForm;
