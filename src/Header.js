import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class Header extends Component {
  render(){
    const { backHandle } = this.props;
    return (
      <div className="header">
        {
          backHandle && 
          (
            <Button className="fa fa-arrow-left" onClick={backHandle}/>
          )
        }
        <p className="logo">{this.props.title}</p>
      </div>
    );
  }
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backHandle: PropTypes.func
}

export default Header;