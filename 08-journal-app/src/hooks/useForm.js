import { useState } from "react"

const useForm = (initialState) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  return {
    formValues,
    handleChange,
  }
}

export default useForm;
