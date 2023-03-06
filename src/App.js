import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
