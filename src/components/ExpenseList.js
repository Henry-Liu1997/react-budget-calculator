import React from 'react';
import { MdDelete } from 'react-icons/md';

import ExpenseItem from './ExpenseItem';

export default ({ expenses, edit, handleClear, handleDelete, handleEdit }) => {
  return (
    <div>
      <ul className="list-group ">
        {expenses.map((expense) => (
          <ExpenseItem
            expense={expense}
            key={expense.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      {expenses.length > 0 && (
        <button
          className="main-btn btn btn-danger mx-auto"
          onClick={handleClear}
        >
          clear expenses
          <MdDelete className="btn-icon ml-2" />
        </button>
      )}
    </div>
  );
};
