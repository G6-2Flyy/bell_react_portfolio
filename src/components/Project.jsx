export default function Project({ proj }) {
  return (
    <>
      {/* <div className="project">
    <img src={proj.image} alt="" />
    <div className="links">
        <h3>{proj.title}</h3>
        <p>
            <a href={proj.live} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
            <a href={proj.github} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github"></i></a>
        </p>
    </div>
</div> */}
      <div className="card project " >
        <img src={proj.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{proj.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="links">
          <a href={proj.live} className="btn" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
          <a href={proj.github} className="btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>
          
        </div>
      </div>
    </>
  );
}
