import eventImg from "../assets/event.png";

const EventsWidget = () => {
  return (
    <section className="card p-3">
      <img src={eventImg} alt="Upcoming Event" className="img-fluid rounded" />
      <h6 className="mt-2">Event Name Goes Here</h6>
      <p className="small text-muted">7 Jan 2023 • 4:30 PM</p>
      <button className="btn btn-primary btn-sm w-100">
        Register Now
      </button>
    </section>
  );
};

export default EventsWidget;
