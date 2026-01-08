import serviceImg from "../assets/boy.png";

const AlliedServicesCard = () => {
  return (
    <section className="allied-card">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-md-7">
          <p className="allied-subtitle">Allied Services</p>
          <h3 className="allied-title">Overseas Education Loans</h3>
          <p className="allied-desc">
            Provide end to end overseas education loan assistance
            to your students to help them achieve their goal
          </p>

          <button className="btn btn-light allied-btn">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="col-md-5 text-end">
          <div className="allied-img-wrapper">
            <img src={serviceImg} alt="Student" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlliedServicesCard;
