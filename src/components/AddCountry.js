import React from 'react';
import { Field, reduxForm } from 'redux-form'
import AddCountryForm from './form/add_new_country_form'

const showResults_result = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
  }, 500)
})

const AddCountry = React.createClass({
	saveCountry(values){
		this.props.addNewCountry({name:values.country_name});
		console.log(values);
	}
  ,render() {
    return (
      <div className="row">
        <AddCountryForm saveCountry={this.saveCountry}/>
      </div>
    );
  }
});

export default AddCountry;
