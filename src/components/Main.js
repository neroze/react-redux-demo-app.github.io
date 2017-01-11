import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdddCountry from './AddCountry';

const Single = React.createClass({
  getInitialState: function() {
        return {
           email:"neerozoe@gmail.commands"
        };
  }
  ,render() {
    console.log("here comes the email : "+this.email)
    return (
      <div className="main col-md-5">
      	<Header></Header>
        <AdddCountry {...this.props} />
        { React.cloneElement(this.props.children, this.props) }
      	<Footer></Footer>
      </div>
    );
  }
});

export default Single;
