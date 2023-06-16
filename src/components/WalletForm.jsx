import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './WalletForm.css';
import { fethApi } from '../services/fetchApi';
import { ADD_DESPENSE, GET_CURRENCYS } from '../redux/actionsName';

class WalletForm extends Component {
  state = {
    valueDespense: '',
    descriptionDespense: '',
    currencySelected: 'USD',
    methodPayment: '',
    tag: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fethApi(GET_CURRENCYS));
  }

  changeField = ({ target }) => {
    const { name, value, type } = target;
    const number = 0;
    const validNumber = (type === 'number' && value < number) ? 0 : value;

    this.setState((prev) => ({
      ...prev,
      [name]: validNumber,
    }));
  };

  saveStateButton = () => {
    const {
      valueDespense,
      descriptionDespense,
      currencySelected,
      methodPayment,
      tag } = this.state;
    const { dispatch } = this.props;
    const payload = {
      id: 0,
      value: valueDespense,
      description: descriptionDespense,
      currency: currencySelected,
      method: methodPayment,
      tag,
    };
    dispatch(fethApi(ADD_DESPENSE, payload));

    this.setState({
      valueDespense: '',
      descriptionDespense: '',
      currencySelected: 'USD',
      methodPayment: '',
      tag: '',
    });
  };

  render() {
    const { wallet } = this.props;
    const {
      valueDespense,
      descriptionDespense,
      currencySelected,
      methodPayment,
      tag,
    } = this.state;
    return (
      <div className="wallet-form">
        <div className="conteiner-wallet-form">
          <form>
            <label htmlFor="description">
              Descriçao da despesa
            </label>
            <input
              data-testid="description-input"
              value={ descriptionDespense }
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
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            <label htmlFor="value">
              Valor
            </label>
            <input
              name="valueDespense"
              id="value"
              value={ valueDespense }
              type="number"
              className="value"
              data-testid="value-input"
              onChange={ this.changeField }
            />
            <label htmlFor="currency">
              Método de pagamento
            </label>
            <select
              value={ methodPayment }
              data-testid="method-input"
              onChange={ this.changeField }
              name="methodPayment"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
            <label htmlFor="currency">
              Moeda
            </label>
            <select
              value={ currencySelected }
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
        <button
          onClick={ this.saveStateButton }
          className="buttonAddDespense"
        >
          Adicionar despesa

        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ wallet }) => ({
  wallet,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
