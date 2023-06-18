import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './WalletForm.css';
import { fethApi } from '../services/fetchApi';
import { ADD_DESPENSE, GET_CURRENCYS } from '../redux/actionsName';
import { editExpense } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
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
    const { dispatch } = this.props;

    dispatch(fethApi(ADD_DESPENSE, {
      ...this.state,
    }));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    });
  };

  editDespenseButton = () => {
    const { dispatch, wallet } = this.props;
    const filterExpenseID = wallet.expenses
      .find((expense) => expense.id === wallet.idToEdit);
    const filterExpenses = wallet.expenses
      .filter((expense) => expense.id !== wallet.idToEdit);
    console.log(wallet.idToEdit);
    const { state } = this;
    const payload = {
      id: wallet.idToEdit,
      ...filterExpenseID,
      ...state,
    };

    const newExpenses = [...filterExpenses, payload].sort((a, b) => a.id - b.id);
    console.log(newExpenses);
    dispatch(editExpense(newExpenses));
  };

  render() {
    const { wallet } = this.props;
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    return (
      <div className="wallet-form">
        { wallet.editor && <h1>Edição de despesa </h1>}
        <div className="conteiner-wallet-form">
          <form>
            <label htmlFor="description">
              Descriçao da despesa
            </label>
            <input
              data-testid="description-input"
              value={ description }
              onChange={ this.changeField }
              name="description"
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
              name="value"
              id="value"
              value={ value }
              type="number"
              className="value"
              data-testid="value-input"
              onChange={ this.changeField }
            />
            <label htmlFor="currency">
              Método de pagamento
            </label>
            <select
              value={ method }
              data-testid="method-input"
              onChange={ this.changeField }
              name="method"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
            <label htmlFor="currency">
              Moeda
            </label>
            <select
              value={ currency }
              data-testid="currency-input"
              onChange={ this.changeField }
              name="currency"
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

        {
          wallet.editor
            ? (
              <button
                onClick={ this.editDespenseButton }
                className="buttonAddDespense"
              >
                Editar despesa
              </button>
            )
            : (
              <button
                onClick={ this.saveStateButton }
                className="buttonAddDespense"
              >
                Adicionar despesa
              </button>
            )
        }
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
    editor: PropTypes.bool,
    idToEdit: PropTypes.number,
    expenses: PropTypes.arrayOf(
      PropTypes.shape({}),
    ),
  }).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
