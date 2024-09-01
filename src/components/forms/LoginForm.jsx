import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginValidation from '../../validation/loginValidation';
import useFormSubmit from '../../hooks/useFormSubmit';

const LoginForm = () => {
  const handleSubmit = useFormSubmit('login');

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={loginValidation}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { setSubmitting, validateForm }) => {
        validateForm(values).then((errors) => {
          if (Object.keys(errors).length === 0) {
            handleSubmit(values, { setSubmitting });
          }
          setSubmitting(false);
        });
      }}
    >
      {({ handleChange, handleBlur, values, isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor='name'>Name</label>
            <Field
              type='text'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <ErrorMessage name='name' component='div' className='error' />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <Field
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage name='email' component='div' className='error' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <Field
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <ErrorMessage name='password' component='div' className='error' />
          </div>

          <button type='submit' disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
