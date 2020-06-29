import React from 'react';
import { MdSend } from 'react-icons/md';

export default (props) => {
  const { charge, amount, handleCharge, handleAmount, handleSubmit } = props;
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-6">
          <label className="text-muted" htmlFor="charge">
            charge
          </label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group col-6">
          <label className="text-muted" htmlFor="amount">
            amount
          </label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button type="submit" className="btn btn-primary main-btn mx-auto mb-3">
          submit <MdSend className="btn-icon ml-2" />
        </button>
      </div>
    </form>
  );
};
