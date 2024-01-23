import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
const App = () => {
  const [expense, setExpense] = useState([
    { id: 1, charge: "콜라", amount: 2000 },
    { id: 2, charge: "빵", amount: 1000 },
    { id: 3, charge: "맥북", amount: 2000 },
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleEdit= (id) => {
    const expenses = expense.find(item => item.id === id);
    const {charge,amount} = expenses;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setEdit(true);
  }

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDelete = (id) => {
    const newExpenses = expense.filter((expense) => expense.id !== id);
    setExpense(newExpenses);
    handleAlert({ type: "danger", text: "아이템이 삭제되었습니다." });
  };

  const clearItems = () => {
    setExpense([])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if(edit){
        const newExpenses = expense.map(item => {
          return item.id === id ? {...item,charge,amount}:item;
        })
        setExpense(newExpenses)
        setEdit(false);
        handleAlert({ type: "success", text: "아이템이 수정되었습니다." });
      }else{

        const newExpense = { id: crypto.randomUUID(), charge, amount };
        const newExpenses = [...expense, newExpense];
        setExpense(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
      }
      setCharge("");
      setAmount(0);
    } else {
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으며 amount값은 0보다 커야합니다",
      });
      console.log("error");
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1000);
  };
  return (
    <main className="main-container">
      <div className="sub-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
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
            edit={edit}
          />
        </div>
        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          {/* Expense List */}
          <ExpenseList initialExpenses={expense} handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            padding: "1rem",
          }}
        >
          <p style={{ fontSize: "2rem" }}></p>총 합계 :
          <span>
            {expense.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
            원
          </span>
        </div>
      </div>
    </main>
  );
};
export default App;
