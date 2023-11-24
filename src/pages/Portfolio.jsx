import Project from "../components/Project";

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <div className="projects-container d-flex justify-content-between flex-wrap row-gap-3">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            </div>
        </div>
    )
}