import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  console.log(values);

  if (!values.country_name) {
    errors.country_name = 'Required'
  } else if (values.country_name.length > 15) {
    errors.country_name = 'Must be 15 characters or less'
  }
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }
  return errors
}

const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or greater` : undefined
const maxLength15 = maxLength(15)
const minLength5 = minLength(5)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
  {console.log(error, warning )}
    <label>{label}</label>
    <div className="row">
      <input className="form-control col-md-5 jumper-input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit((values) => {
      props.saveCountry(values);
      reset();
    }) }>
      <div>
        <div className="form-group">
          <Field id="country_name" name="country_name" 
                component={renderField} 
                type="text" 
                placeholder="Country Name" 
                label="Country Name"
                validate={[ required, maxLength15, minLength5]}
          />
        </div>
      </div>
      
      <div className="row">
        <button className="col-md-3 btn btn-success btn-block" type="submit" disabled={pristine || submitting}>Save New Country </button>
        <button className="col-md-3 btn btn-info btn-block" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
  // validate     
})(SimpleForm)