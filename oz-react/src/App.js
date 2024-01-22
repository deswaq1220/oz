import { Component, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
const App = () => {
  const [expense, setExpense] = useState([
    { id: 1, charge: "콜라", amount: 2000 },
    { id: 2, charge: "빵", amount: 1000 },
    { id: 3, charge: "맥북", amount: 2000 },
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDelete = (id) => {
    const newExpenses = expense.filter((expense) => expense.id !== id);
    setExpense(newExpenses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const newExpense = { id: crypto.randomUUID(), charge, amount };
      const newExpenses = [...expense, newExpense];
      setExpense(newExpenses);
      setCharge("");
      setAmount(0);
    } else {
      console.log("error");
    }
  };
  return (
    <main className="main-container">
      <div className="sub-container">
        <h1>장바구니</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* Expense form */}
          <ExpenseForm
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
          />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* Expense List */}
          <ExpenseList initialExpenses={expense} handleDelete={handleDelete} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            padding: "1rem",
          }}
        >
          <p style={{ fontSize: "2rem" }}></p>총 합계 :
        </div>
      </div>
    </main>
  );
};
export default App;
