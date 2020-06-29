import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

export default ({ expense, handleDelete, handleEdit }) => {
  const { charge, amount, id } = expense;
  return (
    <li className="list-group-item mb-4  container">
      <div className="row align-items-center">
        <div className="col-4">
          <span>{charge}</span>
        </div>
        <div className="col-4">
          <span className="bg-danger text-white">${amount}</span>
        </div>
        <div className="col-4">
          <button className="edit-btn bg-white text-info btn-icon mr-3 ">
            <MdEdit onClick={() => handleEdit(id)} />
          </button>
          <button className="delete-btn text-danger bg-white btn-icon">
            <MdDelete onClick={() => handleDelete(id)} />
          </button>
        </div>
      </div>
    </li>
  );
};
