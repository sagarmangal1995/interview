import {
    BsHouseDoor,
    BsPeople,
    BsFileText,
    BsSearch,
    BsWallet
} from "react-icons/bs";

const Sidebar = () => {
    return (
        <aside className="sidebar" aria-label="Main Navigation">
            <h5 className="logo">coursefinder.ai</h5>

            <ul className="nav flex-column">
                <li className="nav-item active">
                    <BsHouseDoor /> Dashboard
                </li>
                <li className="nav-item">
                    <BsPeople /> Students
                </li>
                <li className="nav-item">
                    <BsFileText /> Applications
                </li>
                <li className="nav-item">
                    <BsSearch /> Search Courses
                </li>
                <li className="nav-item">
                    <BsWallet /> Wallet
                </li>
            </ul>

        </aside>
    );
};

export default Sidebar;
