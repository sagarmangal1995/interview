import { BsSearch, BsMegaphone, BsBell, BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="top-navbar">
      <div className="container-fluid main-container">
        <div className="navbar-grid no-logo">
          {/* SEARCH */}
          <div className="navbar-search-wrapper">
            <BsSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by student name, ack no."
              aria-label="Search"
            />
          </div>

          {/* RIGHT ACTIONS */}
          <div className="navbar-right">
            <div className="whats-new">
              <BsMegaphone className="nav-icon" />
              <span>Whats New?</span>
            </div>

            <div className="notification-box">
              <BsBell className="nav-icon" />
              <span className="badge">2</span>
            </div>

            <div className="profile">
              <img
                src="https://i.pravatar.cc/36?img=47"
                alt="User profile"
              />
              <span className="profile-name">Sagar Mangal</span>
              <BsChevronDown className="nav-icon small" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
