import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import edit from '../images/edit.svg';
import deleteIcon from '../images/delete.svg';
import './Table.css';
import { deleteExpense, editExpenseTrue } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    const { dispatch } = this.props;
    console.log(expenses);
    return (
      <table className="table-despense">
        <thead className="table-head">

          <tr>

            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody className="table-body">
          { expenses.map(({
            id, description, tag, method, value, currency, exchangeRates,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{ (exchangeRates[currency].ask * value).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  className="button-edit"
                  onClick={ () => dispatch(editExpenseTrue(id)) }
                >
                  <img src={ edit } alt="" />
                </button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => dispatch(deleteExpense(id)) }
                >
                  <img src={ deleteIcon } alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  edit: state.wallet.edit,
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      tag: PropTypes.string,
      method: PropTypes.string,
      value: PropTypes.string,
      currency: PropTypes.string,
      exchangeRates: PropTypes.objectOf(
        PropTypes.shape().isRequired,
      ),
    }),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
