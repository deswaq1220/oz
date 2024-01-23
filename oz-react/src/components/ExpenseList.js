import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import React from "react";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({
  initialExpenses,
  handleDelete,
  handleEdit,
  clearItems,
  expense,
}) => {
  return (
    <>
      <ul className="list">
        {initialExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expense.length > 0 ? (
        <button className="btn" onClick={clearItems}>
          목록지우기<MdDelete className="btn-icon"/>
        </button>
      ) : null}
    </>
  );
};

export default ExpenseList;
