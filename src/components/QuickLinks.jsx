import { BsBoxArrowUpRight } from "react-icons/bs";

const links = [
  "Learning Resources",
  "Learning Resources",
  "Learning Resources",
  "Learning Resources",
];

const QuickLinks = () => {
  return (
    <section className="card quick-links-card">
      <h6 className="mb-3">Quick Links</h6>

      <ul className="quick-links-list">
        {links.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <BsBoxArrowUpRight />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickLinks;
