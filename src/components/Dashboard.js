function Dashboard({ income, expense }) {
  const balance = income - expense;

  return (
    <div style={{
      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "20px"
    }}>
      <h3>Total Balance</h3>
      <h1>₹{balance}</h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
        <div>
          <p>Income</p>
          <h3 style={{ color: "#22c55e" }}>₹{income}</h3>
        </div>

        <div>
          <p>Expense</p>
          <h3 style={{ color: "#ef4444" }}>₹{expense}</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;