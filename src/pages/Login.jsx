import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionPushEmail } from '../redux/actions';
import './Login.css';
import logo from '../images/logo.svg';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    buttonDisable: true,
  };

  componentDidMount() {
    this.verifyDados();
  }

  verifyDados = () => {
    const { email, password } = this.state;

    const minCharcters = 6;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const validate = password.length >= minCharcters && emailRegex.test(email);
    this.setState((prev) => ({
      ...prev, buttonDisable: !(validate),
    }));
  };

  changeInput = ({ target }) => {
    const { name, value } = target;
    this.setState(
      (prev) => ({
        ...prev, [name]: value,
      }),
      () => this.verifyDados(),
    );
  };

  clickButton = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(actionPushEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, buttonDisable } = this.state;

    return (
      <div className="conteiner-form">
        <img src={ logo } alt="logo Trybe Wallet" />
        <form>

          <input
            data-testid="email-input"
            type="email"
            value={ email }
            onChange={ this.changeInput }
            name="email"
            id="email"
            placeholder="Email"
          />

          <input
            data-testid="password-input"
            type="password"
            min="6"
            name="password"
            id="password"
            placeholder="Password"
            value={ password }
            onChange={ this.changeInput }
          />

          <button
            disabled={ buttonDisable }
            onClick={ this.clickButton }
            type="button"
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect()(Login);
