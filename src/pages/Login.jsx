import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="conteiner-form">
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
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
