import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const TABS = [
  { label: "Pending On Me (15)", key: "pending" },
  { label: "Lorem Ipsum (12)", key: "lorem1" },
  { label: "Lorem Ipsum (18)", key: "lorem2" },
];

const DATA = [
  {
    ack: "11710/22-23",
    name: "Rishi Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "MSc International...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  {
    ack: "11710/22-23",
    name: "Viren Shah",
    email: "virensha24@gmail.com",
    university: "Sheffield Hallam...",
    program: "MSc International...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  {
    ack: "11710/22-23",
    name: "Tushar Joshi",
    email: "tushar@gmail.com",
    university: "Sheffield Hallam...",
    program: "MSc International...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
];

const ApplicationsTable = () => {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <section className="applications-card">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">Applications</h6>
        <span className="text-muted">⤢</span>
      </div>

      {/* Tabs */}
      <div className="app-tabs mb-3">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`tab-btn ${
              activeTab === tab.key ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table app-table">
          <thead>
            <tr>
              <th>Ack no.</th>
              <th>Student name</th>
              <th>University</th>
              <th>Program</th>
              <th>Pending Since</th>
            </tr>
          </thead>

          <tbody>
            {DATA.map((item, index) => (
              <tr key={index}>
                <td className="link">{item.ack}</td>

                <td>
                  <div className="fw-medium">{item.name}</div>
                  <div className="text-muted small">{item.email}</div>
                </td>

                <td>{item.university}</td>
                <td>{item.program}</td>

                <td>
                  <div className="fw-medium">{item.pending}</div>
                  <div className="text-muted small">{item.date}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-wrapper">
        <button className="page-btn">
          <BsChevronLeft />
        </button>

        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>

        <button className="page-btn">
          <BsChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ApplicationsTable;
