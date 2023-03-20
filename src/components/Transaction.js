import React from "react";
import editIcon from "../images/edit.svg";
import deleteIcon from "../images/delete.svg";

const Transaction = () => {
  const transaction = "income";

  return (
    <li
      class={(transaction === "income" && "transaction income") || "transaction expense"}
    >
      <p>Earned this month</p>
      <div class="right">
        <p>৳ 100</p>
        <button class="link">
          <img class="icon" alt="" src={editIcon} />
        </button>
        <button class="link">
          <img class="icon" alt="" src={deleteIcon} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
