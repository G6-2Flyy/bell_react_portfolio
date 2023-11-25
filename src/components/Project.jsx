export default function Project({proj}) {
    return (
<div className="project">
    <img src={proj.image} alt="" />
    <div className="links">
        <h3>{proj.title}</h3>
        <p>
            <a href={proj.live} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a>
            <a href={proj.github} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github"></i></a>
        </p>
    </div>
</div>
    )
}