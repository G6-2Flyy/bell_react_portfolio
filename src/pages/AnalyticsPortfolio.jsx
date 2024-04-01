import Project from "../components/Project";
import data from "../projects.json";

export default function Analytics() {
    return (
        <div>
            {/* <h3>Data Analytics Portfolio</h3> */}
            <div className="projects-container d-flex justify-content-between flex-wrap row-gap-3">
           {
            data.analytics.map((proj)=>(<Project key={proj.title} proj={proj}/>))
           }
            </div>
        </div>
    )
}