import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionPushEmail } from '../redux/actions';
import './Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    const { dispatch } = this.props;
    return (
      <div className="conteiner-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              value={ email }
              onChange={ ({ target }) => this.setState((prev) => ({
                ...prev, email: target.value,
              })) }
              name="input-email"
              id="email"
              placeholder="Digite aqui seu email"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              data-testid="password-input"
              type="password"
              min="6"
              name="password"
              id="password"
              placeholder="Escoha sua senha"
              value={ password }
              onChange={ ({ target }) => this.setState((prev) => ({
                ...prev, password: target.value,
              })) }
            />
          </label>
          <button
            onClick={ () => dispatch(actionPushEmail(email)) }
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
};

export default connect()(Login);
