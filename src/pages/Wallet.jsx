import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import './Wallet.css';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>

        <div className="conteiner-wallet">
          <Header />
          <WalletForm />
        </div>

        <Table />
      </div>
    );
  }
}

export default Wallet;
