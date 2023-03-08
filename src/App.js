import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Initial_Expenses = [
  {
    id: "e1",
    title: "toilet paper",
    amount: 117.3,
    date: new Date(2023, 2, 28),
  },

  { id: "e2", title: "new pc", amount: 102.12, date: new Date(2023, 1, 29) },
  { id: "e3", title: "new os", amount: 100.12, date: new Date(2023, 2, 29) },

  {
    id: "e4",
    title: "Car Insurence",
    amount: 289.21,
    date: new Date(2023, 3, 7),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Initial_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
  };
  /*return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );
  */

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
