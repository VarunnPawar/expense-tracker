import { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addTransaction({
      title,
      amount: Number(amount),
      type,
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: "flex",
      gap: "10px",
      marginBottom: "20px"
    }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: 2, padding: "10px", borderRadius: "8px", border: "none" }}
      />

      <input
        type="number"
        placeholder="₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "none" }}
      />

      <select
        onChange={(e) => setType(e.target.value)}
        style={{ padding: "10px", borderRadius: "8px" }}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button style={{
        background: "#22c55e",
        border: "none",
        padding: "10px 15px",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer"
      }}>
        Add
      </button>
    </form>
  );
}

export default AddTransaction;