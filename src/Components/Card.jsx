import ProjectData from "../Data/Projects.json";
import "../Styles/Card.css";

export default function Card() {
  return (
    <div className="grid_container">
      {ProjectData &&
        ProjectData.map((data) => {
          return (
            <div className="Card" key={data.id}>
              {/* <img src={data.imgSrc} alt="project" /> */}
              <div className="card_content">
                <h3 className="card_title">{data.Title}</h3>
                <article className="card_body">
                  <p>{data.Description}</p>
                </article>
                <hr />
                <div className="specs_container">
                  <p className="catigory">{data.Catigory} -</p>
                  <p className="tools"> {data.Tools}</p>
                </div>
                <a
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  href={data.SourceCodeURL}
                >
                  Learn More
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
}
