const managers = [
  {
    name: "Santosh Sharma",
    phone: "+91 9876543210",
    city: "Hyderabad",
    email: "sshatmal123@kcoverseas.com",
    img: "https://i.pravatar.cc/60?img=12",
  },
  {
    name: "Santosh Sharma",
    phone: "+91 9876543210",
    city: "Hyderabad",
    email: "sshatmal123@kcoverseas.com",
    img: "https://i.pravatar.cc/60?img=12",
  },
  {
    name: "Santosh Sharma",
    phone: "+91 9876543210",
    city: "Hyderabad",
    email: "sshatmal123@kcoverseas.com",
    img: "https://i.pravatar.cc/60?img=12",
  },
];

const ContactRegionalManager = () => {
  return (
    <section className="card contact-manager-card">
      <h6 className="mb-3">Contact Regional Manager</h6>

      {managers.map((mgr, index) => (
        <div key={index} className="manager-item">
          <img src={mgr.img} alt={mgr.name} />

          <div className="manager-info">
            <p className="manager-name">{mgr.name}</p>
            <p className="manager-meta">
              {mgr.phone} &nbsp; | &nbsp; {mgr.city}
            </p>
            <p className="manager-email">{mgr.email}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactRegionalManager;
