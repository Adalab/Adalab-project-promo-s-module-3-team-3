import cover from "../../images/proyecto.jpg";
import user from "../../images/user.jpeg";

const Preview = ({ data }) => {
  return (
    <section className="preview">
      <img className="image" src={cover} alt="" />

      <section className="autor">
        <article className="articleProject">
          <small className="articleProject__subtitle">
            Personal Project Card
          </small>
          <hr className="articleProject__line" />

          <h2 className="articleProject__title">
            {data.name || "Elegant Workspace"}
          </h2>
          <p className="articleProject__slogan">
            {data.slogan || "Diseños Exclusivos"}
          </p>
          <p className="articleProject__desc">
            {data.desc ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet faucibus commodo tellus lectus lobortis. "}
          </p>
          <div className="articleProject__technologies">
            <p className="articleProject__technologies--text">
              {data.technologies || "React JS - HTML - CSS"}
            </p>
            <span className="articleProject__technologies--icons">
              <a
                href={data.demo.startsWith("https://") ? data.demo : null}
                target="_blank"
                className="link__icons"
                rel="noreferrer"
              >
                <i className="fa-solid fa-globe"></i>
              </a>
              <a
                href={data.repo.startsWith("https://") ? data.repo : null}
                target="_blank"
                className="link__icons"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
          </div>
        </article>

        <article className="info-autor">
          <img className="info-autor__image" src={user} alt="" />
          <p className="info-autor__job">
            {data.job || "Full Stack Developer"}
          </p>
          <p className="info-autor__name">
            {data.autor || "Emmelie Björklund"}
          </p>
        </article>
      </section>
    </section>
  );
};

export default Preview;
