import { Formik, Form, Field } from 'formik';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import contactValidation from '../../validation/contactValidation';
import useFormSubmit from '../../hooks/useFormSubmit';

const ContactForm = () => {
  const handleSubmit = useFormSubmit('contact');

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={contactValidation}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Field name='name' component={InputField} placeholder='Name' />
          <Field name='email' component={InputField} placeholder='Email' />
          <Field
            name='message'
            component={InputField}
            as='textarea'
            placeholder='Message'
          />
          <Button type='submit'>Send</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
