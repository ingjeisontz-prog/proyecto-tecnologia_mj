import { useState } from 'react';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const allFieldsFilled = Object.values(formData).every(
      value => value.trim() !== ''
    );
    
    if (allFieldsFilled) {
      setFormSubmitted(true);
      console.log('Formulario enviado:', formData);
      
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData(initialState);
      }, 3000);
    }
  };

  const resetForm = () => {
    setFormData(initialState);
    setFormSubmitted(false);
  };

  return { 
    formData, 
    formSubmitted, 
    handleChange, 
    handleSubmit, 
    resetForm 
  };
};