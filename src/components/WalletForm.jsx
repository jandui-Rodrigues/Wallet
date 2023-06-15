import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fethApi } from '../redux/actions/index';
import './WalletForm.css';

class WalletForm extends Component {
  state = {
    valueDespense: '',
    descriptionDespense: '',
    currencySelected: '',
    methodPayment: '',
    tag: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fethApi());
  }

  changeField = ({ target }) => {
    const { name, value } = target;
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  render() {
    const { wallet } = this.props;
    return (
      <div className="conteiner-wallet-form">
        <form>
          <label htmlFor="description">
            Descriçao da despesa
          </label>
          <input
            data-testid="description-input"
            onChange={ this.changeField }
            name="descriptionDespense"
            id="description"
            className="description"
            cols="30"
            rows="10"
          />
          <label htmlFor="tags">
            Categoria de despesa
          </label>
          <select
            onChange={ this.changeField }
            data-testid="tag-input"
            name="tag"
            className="tags"
            id="tags"
          >
            <option value="alimentaçao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
          <label htmlFor="value">
            Valor
          </label>
          <input
            name="valueDespense"
            id="value"
            className="value"
            type="text"
            data-testid="value-input"
            onChange={ this.changeField }
          />
          <label htmlFor="currency">
            Método de pagamento
          </label>
          <select
            data-testid="method-input"
            onChange={ this.changeField }
            name="methodPayment"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de credito">Cartão de crédito</option>
            <option value="Cartão de debito">Cartão de débito</option>
          </select>
          <label htmlFor="currency">
            Moeda
          </label>
          <select
            data-testid="currency-input"
            onChange={ this.changeField }
            name="currencySelected"
            id="currency"
          >
            { wallet.currencies
              .length !== 0 && wallet.currencies
              .map((moeda) => (
                <option value={ moeda } key={ moeda }>{ moeda}</option>
              )) }
          </select>

        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ wallet }) => ({
  wallet,
});

WalletForm.propTypes = {
  wallet: PropTypes.shape().isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
