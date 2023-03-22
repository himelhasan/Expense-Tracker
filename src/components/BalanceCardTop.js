import React from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/numberwithcommas";

const BalanceCardTop = () => {
  const { transactions } = useSelector((state) => state.transactions);
  console.log(transactions);

  const totalBalance = (transactions) => {
    let balance = 0;
    transactions.forEach((transaction) => {
      const { type, amount } = transaction;

      if (type === "income") {
        balance += amount;
      }
      if (type === "expense") {
        balance -= amount;
      }
    });
    return balance;
  };

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳ </span>

        {transactions.length > 0 ? (
          <span>{numberWithCommas(totalBalance(transactions))}</span>
        ) : (
          <span>0000</span>
        )}
      </h3>
    </div>
  );
};

export default BalanceCardTop;
