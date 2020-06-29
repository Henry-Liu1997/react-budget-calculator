import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

import './App.css';

const initialExpenses = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'car payment', amount: 400 },
  { id: uuid(), charge: 'grocery', amount: 200 },
];

const Context = React.createContext();

export default function App() {
  // ******************** state values ********************
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState();
  const [amount, setAmount] = useState();
  const [alert, setAlert] = useState({ show: false });

  // ******************** functionality ********************
  // handle charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  //handle amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => setAlert({ show: false }), 3000);
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge && amount > 0) {
      const newExpense = {
        id: uuid(),
        charge: charge,
        amount: parseInt(amount),
      };
      setExpenses([...expenses, newExpense]);
      setAmount('');
      setCharge('');
      handleAlert({ type: 'success', text: 'item added successfully' });
    } else {
      handleAlert({
        type: 'danger',
        text:
          'charge can not be empty value and amount value has to be bigger than zero',
      });
    }
  };

  //handle clear
  const handleClear = () => {
    setExpenses([]);
  };

  //handle delete
  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // handle edit
  const handleEdit = (id) => {
    console.log('handle edit');
  };

  return (
    <section className="text-capitalize">
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1 className="mb-5">budget calculator</h1>
      <main className="container bg-white p-5">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList
          expenses={expenses}
          handleClear={handleClear}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
      <h1 className="mt-5">
        total spending :
        <span>
          $
          {expenses.reduce((acc, cur) => {
            return acc + cur.amount;
          }, 0)}
        </span>
      </h1>
    </section>
  );
}
