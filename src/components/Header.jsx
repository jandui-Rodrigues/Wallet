import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../images/logo.svg';
import moeda from '../images/moeda.svg';
import person from '../images/person.svg';

class Header extends Component {
  render() {
    const { user, wallet } = this.props;
    console.log(user.email);
    return (
      <header className="conteiner-header">
        <img src={ logo } alt="logo Trybe Wallet" />
        <div>
          <img src={ moeda } alt="" />
          <h4 data-testid="total-field">{wallet.idToEdit}</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </div>
        <div>
          <img src={ person } alt="" />
          <h3 className="user-email" data-testid="email-field">{ user.email }</h3>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  user,
  wallet,
});

Header.propTypes = {
  user: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  wallet: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Header);
