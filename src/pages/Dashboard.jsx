import { useState } from "react";
import ApplicationsTable from "../components/ApplicationsTable";
import Filters from "../components/Filters";
import StatsRow from "../components/StatsRow";
import NewsWidget from "../components/NewsWidget";
import EventsWidget from "../components/EventsWidget";
import QuickLinks from "../components/QuickLinks";
import ContactRegionalManager from "../components/ContactRegionalManager";

import AlliedServicesCard from "../components/AlliedServicesCard";
const APPLICATIONS = [
    {
        ack: "11710/22-23",
        name: "Rishi Joshi",
        year: "2023",
        date: "2023-12-12",
        intake: "Fall",
        country: "USA",
    },
    {
        ack: "11711/22-23",
        name: "Viren Shah",
        year: "2024",
        date: "2024-01-05",
        intake: "Spring",
        country: "UK",
    },
    {
        ack: "11712/22-23",
        name: "Tushar Joshi",
        year: "2023",
        date: "2023-11-20",
        intake: "Fall",
        country: "Canada",
    },
];

const Dashboard = ({ searchTerm }) => {
    const [data, setData] = useState(APPLICATIONS);
    const applyFilters = (filters) => {
        let filtered = APPLICATIONS;

        if (filters.year)
            filtered = filtered.filter((i) => i.year === filters.year);

        if (filters.intake)
            filtered = filtered.filter((i) => i.intake === filters.intake);

        if (filters.country)
            filtered = filtered.filter((i) => i.country === filters.country);

        if (filters.date)
            filtered = filtered.filter((i) => i.date === filters.date);

        setData(filtered);
    };
    return (
        <main className="dashboard-wrapper">
            <div className="container-fluid main-container">
                {/* GRID */}
                <div className="row g-4 align-items-start">

                    {/* LEFT COLUMN */}
                    <div className="col-xl-8 col-lg-8">
                        {/* Greeting */}
                        <h4 className="mb-4">Hey, Good Morning Sagar!</h4>

                        {/* Filters */}
                        <Filters onApply={applyFilters}/>

                        {/* Stats */}
                        <StatsRow />

                        {/* Applications */}
                        <ApplicationsTable searchTerm={searchTerm} data={data} />

                        {/* Allied Services */}
                        <AlliedServicesCard />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-xl-4 col-lg-4">
                        {/* ACTION BUTTONS */}
                        <div className="right-actions mb-3">
                            <button className="btn btn-outline-primary w-100">
                                Refresh Dashboard
                            </button>
                            <button className="btn btn-primary w-100">
                                Register Student
                            </button>
                        </div>

                        {/* RIGHT STACK */}
                        <div className="right-sidebar">
                            <NewsWidget />
                            <EventsWidget />
                            <QuickLinks />
                            <ContactRegionalManager />
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};


export default Dashboard;
