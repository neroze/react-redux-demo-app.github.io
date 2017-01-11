import React from 'react';
import { Link } from 'react-router';


const Header = React.createClass({
  render() {
    return (
      <div className="header">
      	<Link className="btn" to="/">Home</Link>
      	<Link className="btn" to="/pineTree">Pine Tree</Link>
      </div>
    );
  }
});

export default Header;
