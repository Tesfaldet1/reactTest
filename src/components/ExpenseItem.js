import ExpenseDate from "./ExpeseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function EspenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default EspenseItem;
