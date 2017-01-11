import React from 'react';

const Content = React.createClass({
	getPosts(){
		this.props.fetchData();
	},
  removeThis(e,index, country){
    e.preventDefault();
    this.props.requestRemoveCountry();
    this.props.removeThisCountry(index, country);

  },
  render() {
    return (
      <div className="row">
       <button className="btn btn-info btn-block" onClick={this.getPosts}> Load Countries </button>
       <ul>
         {this.props.countries.map((country, index) => {
            return <li key={index}>{country.name} <a className="red-cross" onClick={(e)=> this.removeThis(e, index,country) }>&times;</a></li>
         })}
         </ul>
      </div>
    );
  }
});

export default Content;
