import Project from "../components/Project";
import data from "../projects.json";

export default function Portfolio() {
    return (
        <div>
            <h3>Portfolio</h3>
            <div className="projects-container d-flex justify-content-between flex-wrap row-gap-3">
           {
            data.projects.map((proj)=>(<Project key={proj.title} proj={proj}/>))
           }
            </div>
        </div>
    )
}