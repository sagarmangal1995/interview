import { useState } from "react";
import {
  BsHouseDoor,
  BsPeople,
  BsFileText,
  BsSearch,
  BsWallet,
  BsChevronLeft,
  BsChevronRight,
  BsBook,
  BsLink45Deg,
  BsCashStack,
} from "react-icons/bs";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="sidebar-header">
        {!collapsed && <span className="logo">coursefinder.ai</span>}

        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle Sidebar"
        >
          {collapsed ? <BsChevronRight /> : <BsChevronLeft />}
        </button>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">
        <li className="active">
          <BsHouseDoor />
          {!collapsed && <span>Dashboard</span>}
        </li>

        <li>
          <BsPeople />
          {!collapsed && <span>Students</span>}
        </li>

        <li>
          <BsFileText />
          {!collapsed && <span>Applications</span>}
        </li>

        <li>
          <BsSearch />
          {!collapsed && <span>Search Courses</span>}
        </li>

        <li>
          <BsWallet />
          {!collapsed && <span>Wallet</span>}
        </li>

        <li>
          <BsCashStack />
          {!collapsed && <span>Commission Payments</span>}
        </li>

        <li>
          <BsBook />
          {!collapsed && <span>Learning Resources</span>}
        </li>

        <li>
          <BsLink45Deg />
          {!collapsed && <span>Quick Links</span>}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
