import eventImg from "../assets/event.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BsCalendar, BsBuilding, BsPerson } from "react-icons/bs";

const EventsWidget = () => {
  return (
    <section className="card events-card">
      {/* Header */}
      <div className="events-header">
        <h6>Upcoming Events</h6>

        <div className="events-nav">
          <button><BsChevronLeft /></button>
          <button><BsChevronRight /></button>
        </div>
      </div>

      {/* Image */}
      <div className="events-image-wrapper">
        <img src={eventImg} alt="Event" />

        <div className="event-time">
          4:30<br />PM
        </div>
      </div>

      {/* Content */}
      <h6 className="event-title">Event Name Goes here</h6>
      <p className="event-date">7 Jan 2023</p>

      <div className="event-meta">
        <p><BsBuilding /> University of New York</p>
        <p><BsPerson /> By Kishori Gupta</p>
      </div>

      <button className="btn btn-primary w-100 mt-2">
        Register Now
      </button>
    </section>
  );
};

export default EventsWidget;
