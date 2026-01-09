import { BsNewspaper } from "react-icons/bs";

const NewsWidget = () => {
  return (
    <section className="card news-card">
      <h6 className="mb-3">News Bulletin</h6>

      <div className="news-content">
        <div className="news-icon">
          <BsNewspaper />
        </div>

        <div>
          <p className="news-title">
            Indian student tops harward!
          </p>

          <p className="news-desc">
            Indian student tops harward university and makes history.
            Its the first time for an Indian student to do this.
            <a href="/" className="read-more"> Read More</a>
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="news-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default NewsWidget;
