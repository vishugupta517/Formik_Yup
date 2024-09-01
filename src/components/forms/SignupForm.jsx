import { Formik, Form, Field } from 'formik';
import InputField from '../ui/InputField';
import Button from '../ui/Button';
import signupValidation from '../../validation/signupValidation';
import useFormSubmit from '../../hooks/useFormSubmit';

const SignupForm = () => {
  const handleSubmit = useFormSubmit('signup');

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={signupValidation}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Field
            name='firstName'
            component={InputField}
            placeholder='Firstname'
          />
          <Field
            name='lastName'
            component={InputField}
            placeholder='Lastname'
          />
          <Field
            name='email'
            component={InputField}
            placeholder='Email'
            type='email'
          />
          <Field
            name='phone'
            component={InputField}
            placeholder='Phone Number'
            type='number'
          />
          <Field
            as='textarea'
            name='address'
            component={InputField}
            placeholder='Address'
            type='textarea'
          />
          <Field
            name='password'
            component={InputField}
            type='password'
            placeholder='***********'
          />
          <Field
            name='confirmPassword'
            component={InputField}
            type='password'
            placeholder='***********'
          />
          <Button type='submit'>Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
