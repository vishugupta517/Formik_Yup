import * as Yup from 'yup';

const signupValidation = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed for this field'),
  lastName: Yup.string()
    .required('Last Name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed for this field'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  address: Yup.string()
    .required('Address is required')
    .min(5, 'Address must be at least 5 characters long'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});

export default signupValidation;
