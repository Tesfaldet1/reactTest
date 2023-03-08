import React from "react";
import "./ExpenseForm.css";

/**
 * @author
 * @function @
 * rfs
 **/

const ExpenseForm = (props) => {
  const titleChangHandler = () => {
    console.log("title changed!");
  };
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangHandler} />
        </div>
        <div className="new-expense_control">
          <label>amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
