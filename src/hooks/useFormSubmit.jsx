import { useCallback } from 'react';
// import axios from 'axios';

const useFormSubmit = (formType) => {
  return useCallback(
    async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(`/api/${formType}`, values);
        console.log('Form submission success:', response.data);
        resetForm();
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setSubmitting(false);
      }
    },
    [formType]
  );
};

export default useFormSubmit;
