import { useMemo, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const TABS = [
  { key: "pending", label: "Pending On Me (15)" },
  { key: "lorem1", label: "Lorem Ipsum (12)" },
  { key: "lorem2", label: "Lorem Ipsum (18)" },
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
    ack: "11711/22-23",
    name: "Viren Shah",
    email: "virensha24@gmail.com",
    university: "Sheffield Hallam...",
    program: "MSc International...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  {
    ack: "11712/22-23",
    name: "Tushar Joshi",
    email: "tushar@gmail.com",
    university: "Sheffield Hallam...",
    program: "MSc International...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  {
    ack: "11713/22-23",
    name: "Rishi Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "MSc International...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  {
    ack: "11714/22-23",
    name: "Rishi Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "MSc International...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
];

const ROWS_PER_PAGE = 3;

const ApplicationsTable = ({ searchTerm = "",data  }) => {
  const [activeTab, setActiveTab] = useState("pending");
  const [page, setPage] = useState(1);

  /* SEARCH FILTER */
  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return DATA.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.ack.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  /* PAGINATION */
  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return filteredData.slice(start, start + ROWS_PER_PAGE);
  }, [filteredData, page]);

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
            className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => {
              setActiveTab(tab.key);
              setPage(1);
            }}
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
            {paginatedData.length > 0 ? (
              paginatedData.map((item, i) => (
                <tr key={i}>
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
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination-wrapper">
          <button
            className="page-btn"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <BsChevronLeft />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`page-btn ${page === i + 1 ? "active" : ""}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="page-btn"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <BsChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default ApplicationsTable;
