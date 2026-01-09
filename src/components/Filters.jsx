import { useState } from "react";
import { BsCalendar, BsGlobe } from "react-icons/bs";

const Filters = ({ onApply }) => {
  const [filters, setFilters] = useState({
    year: "",
    date: "",
    intake: "",
    country: "",
  });

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const applyFilters = () => {
    onApply(filters);
  };

  return (
    <section className="filter-card">
      {/* ROW 1 */}
      <div className="filter-row">
        <div className="filter-input">
          <BsCalendar />
          <select onChange={(e) => handleChange("year", e.target.value)}>
            <option value="">Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className="filter-input">
          <BsCalendar />
          <input
            type="date"
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </div>

        <div className="filter-input">
          <BsCalendar />
          <select onChange={(e) => handleChange("intake", e.target.value)}>
            <option value="">Select intake</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
          </select>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="filter-row second">
        <div className="filter-input">
          <BsGlobe />
          <select onChange={(e) => handleChange("country", e.target.value)}>
            <option value="">Countries</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <button className="btn apply-btn" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
