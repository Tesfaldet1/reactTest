import React, { useState } from "react";
import ExpenseDate from "./ExpeseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const EspenseItem = (props) => {
  // const clickhandker = () => {
  const [title, setTitle] = useState(props.title);

  const clickhandler = () => {
    setTitle("Uppdate!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
      <button onClick={clickhandler}>change title</button>
    </Card>
  );
};
export default EspenseItem;
