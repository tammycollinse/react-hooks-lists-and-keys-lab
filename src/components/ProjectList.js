import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);
  const projItems = projects.map((projectData)=>{
  return projectData;  
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projItems}</div>
      <ProjectItem technologies={projects.technologies}/>
    </div>
  );
}

export default ProjectList;
//Essentially they want the names from the project object`