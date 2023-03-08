import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

/**
 * @author  Tesfaldet Weldemicheal
 * @function @
 * rsf
 *rcc
 **/

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
