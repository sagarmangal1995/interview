const StatCard = ({ title, count, color }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className={`stat-card border-${color}`}>
        <h3>{count}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
