import React from "react";
import editIcon from "../images/edit.svg";
import deleteIcon from "../images/delete.svg";
import { useDispatch } from "react-redux";
import { editActive } from "../features/transaction/transactionSlice";

const Transaction = ({ transaction }) => {
  // const transaction = "income";
  const { name, type, amount } = transaction;

  const dispatch = useDispatch();

  const handleEditTransaction = () => {
    dispatch(editActive(transaction));
  };

  return (
    <li className={(type === "income" && "transaction income") || "transaction expense"}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEditTransaction}>
          <img className="icon" alt="" src={editIcon} />
        </button>
        <button className="link">
          <img className="icon" alt="" src={deleteIcon} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
