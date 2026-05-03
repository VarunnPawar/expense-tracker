function TransactionList({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{
          background: "#1e293b",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between"
        }}>
          <span>{item.title}</span>

          <span style={{
            color: item.type === "income" ? "#22c55e" : "#ef4444"
          }}>
            ₹{item.amount}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;