import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((x) => (
        <ExpenseItem
          title={x.title}
          date={x.date}
          amount={x.amount}
          key={x.id}
        />
      ))}
    </ul>
  );
};
