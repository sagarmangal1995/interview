const stats = [
  {
    count: 18,
    label: "Conditional",
    color: "blue",
    btn: "Offer letter",
  },
  {
    count: 22,
    label: "Un-Conditional",
    color: "green",
    btn: "Offer letter",
  },
  {
    count: 30,
    label: "Payment Received",
    color: "yellow",
    btn: "All Country",
  },
  {
    count: 8,
    label: "Payment Received",
    color: "red",
    btn: "Offer letter",
  },
  {
    count: 8,
    label: "VISA Received",
    color: "gray",
    btn: "Offer letter",
  },
];

const StatsRow = () => {
  return (
    <div className="row g-3 mb-4">
      {stats.map((item, i) => (
        <div key={i} className="col-lg col-md-4 col-sm-6">
          <div className={`stat-box ${item.color}`}>
            <h2>{item.count}</h2>
            <p>{item.label}</p>
            <button>{item.btn}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
