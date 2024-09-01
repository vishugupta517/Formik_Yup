/* eslint-disable react/prop-types */
const InputField = ({ field, type, form: { touched, errors }, ...props }) => (
  <div className='input-field'>
    <input {...field} {...props} type={type} />
    {touched[field.name] && errors[field.name] && (
      <div className='error'>{errors[field.name]}</div>
    )}
  </div>
);

export default InputField;
