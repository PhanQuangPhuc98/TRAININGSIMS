import React, { Component,PropTypes } from 'react';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
 const Header =({loading})=> {
   console.log(loading);
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {
          loading&&<LoadingDots interval={100} dots={20}/>
        }
      </nav>
    );
  };

  Header.propType={
    loading:PropTypes.bool.isRequired
  };
export default Header;
