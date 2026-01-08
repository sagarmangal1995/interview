import Filters from "../components/Filters";
import StatsRow from "../components/StatsRow";
import ApplicationsTable from "../components/ApplicationsTable";
import NewsWidget from "../components/NewsWidget";
import EventsWidget from "../components/EventsWidget";
import QuickLinks from "../components/QuickLinks";
import AlliedServicesCard from "../components/AlliedServicesCard";
import ContactRegionalManager from "../components/ContactRegionalManager";

const Dashboard = () => {
    return (
        <main className="dashboard-wrapper">
            <div className="container-fluid main-container">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Hey, Good Morning Sagar!</h4>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            Refresh Dashboard
                        </button>
                        <button className="btn btn-primary btn-sm">
                            Register Student
                        </button>
                    </div>
                </div>

                <Filters />
                <StatsRow />

                <div className="row g-4 align-items-start">
                    {/* LEFT */}
                    <div className="col-xl-8 col-lg-8">
                        <ApplicationsTable />
                        <AlliedServicesCard />
                    </div>
                    {/* RIGHT */}
                    <div className="col-xl-4 col-lg-4">
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
