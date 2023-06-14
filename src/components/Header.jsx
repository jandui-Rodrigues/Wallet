import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, wallet } = this.props;
    console.log(user.email);
    return (
      <div>
        <h3 data-testid="email-field">{ user.email }</h3>
        <h4 data-testid="total-field">{wallet.idToEdit}</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
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
