import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import transactionSlice, {
  addTransaction,
  modifyTransaction,
} from "../features/transaction/transactionSlice";

const AddTransitionForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();

  const { isLoading, isError, error } = useSelector((state) => state.transactions);
  const { editing } = useSelector((state) => state.transactions) || {};

  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  //  listen for  edit mode  active

  useEffect(() => {
    const { id, name, amount, type } = editing || {};
    if (id) {
      setEditMode(true);
      setName(name);
      setType(type);
      setAmount(amount);
    } else {
      reset();
    }
  }, [editing]);

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        name,
        type,
        amount: parseInt(amount),
      })
    );
    reset();
  };

  const handleCancelEdit = (e) => {
    setEditMode(false);
  };

  const handleEdit = (e) => {
    setEditMode(true);
    const data = {
      name,
      type,
      amount: parseInt(amount),
    };
    e.preventDefault();

    dispatch(modifyTransaction({ id: editing.id, data }));
    reset();
  };

  return (
    <div className="form">
      <form onSubmit={editMode ? handleEdit : handleCreate}>
        {editMode ? <h3>Edit the transaction</h3> : <h3>Add new transaction</h3>}

        <div className="form-group">
          <label htmlFor="transaction_name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="My Salary"
          />
        </div>

        <div className="form-group radio">
          <label htmlFor="transaction_type">Type</label>
          <div className="radio_group">
            <input
              checked={type === "income"}
              onChange={(e) => setType("income")}
              type="radio"
              value="income"
              name="type"
            />
            <label htmlFor="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="transaction_amount">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="300"
            name="amount"
          />
        </div>

        <button
          disabled={isLoading}
          className={isLoading ? `btn disabled` : "btn"}
          type="submit"
        >
          {editMode ? "Update Transaction " : " Add Transaction"}
        </button>

        {editMode && (
          <button className="btn cancel_edit" onClick={handleCancelEdit}>
            Cancel Edit
          </button>
        )}
      </form>

      {!isLoading && isError && <p className="error mt-5">{error}</p>}
    </div>
  );
};

export default AddTransitionForm;
