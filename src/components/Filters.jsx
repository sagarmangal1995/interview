import { BsCalendar, BsGlobe } from "react-icons/bs";

const Filters = () => {
  return (
    <section className="filter-card mb-4">
      <div className="row g-3 align-items-center">
        <div className="col-md-3 col-sm-6">
          <div className="filter-input">
            <BsCalendar />
            <select aria-label="Select Year">
              <option>Year</option>
            </select>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="filter-input">
            <BsCalendar />
            <select aria-label="Date Created">
              <option>Date Created</option>
            </select>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="filter-input">
            <BsCalendar />
            <select aria-label="Select Intake">
              <option>Select intake</option>
            </select>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="filter-input">
            <BsGlobe />
            <select aria-label="Countries">
              <option>Countries</option>
            </select>
          </div>
        </div>

        <div className="col-md-12 text-end">
          <button className="btn apply-btn">Apply Filters</button>
        </div>
      </div>
    </section>
  );
};

export default Filters;
