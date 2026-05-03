import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [data, setData] = useState([]);

  const addTransaction = (item) => {
    setData([...data, item]);
  };

  const income = data
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = data
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div style={{
      background: "#0f172a",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial"
    }}>
      <Navbar />

      <div style={{
        maxWidth: "600px",
        margin: "auto",
        padding: "20px"
      }}>
        <Dashboard income={income} expense={expense} />

        <AddTransaction addTransaction={addTransaction} />

        <TransactionList data={data} />
      </div>
    </div>
  );
}

export default App;