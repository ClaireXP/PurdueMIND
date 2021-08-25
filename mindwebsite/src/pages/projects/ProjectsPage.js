import './ProjectsPage.css';
import '../../App.css';

import Project from './Project';

import ptsdCollar from '../../assets/projects/ptsdCollar.jpg';
import hydraCheck from '../../assets/projects/hydraCheck.png';
import walkerProject from '../../assets/projects/walkerProject.png';
import exoGlove from '../../assets/projects/exomindGlove.jpeg';
import vertiFix from '../../assets/projects/vertiFix.jpeg';
import tmap from '../../assets/projects/tmap.png';
import smartSock from '../../assets/projects/smartSock.jpeg';

const projectList = require('./projectList.json');
const imgList = {
  "ptsdCollar": ptsdCollar,
  "hydraCheck": hydraCheck,
  "walkerProject": walkerProject,
  "exoGlove": exoGlove,
  "vertiFix": vertiFix,
  "tmap": tmap,
  "smartSock": smartSock
};

export default function ProjectsPage() {
  return (
    <div className='projectsPage'>
      <div className='projectsContainer'>
        <h1 className="sectionHeader" id="currentProjects">Current Mind Projects</h1>
        {getProjects(projectList.currentProjects)}
      </div>

      <div className='projectsContainer'>
        <h1 className="sectionHeader">Past Mind Projects</h1>
        {getProjects(projectList.pastProjects)}
      </div>
    </div>
  );
};

function getProjects(projects, section) {
  const formattedProjects = [];
  for (const index in projects) {
    const project = projects[index];
    formattedProjects.push(<Project
      id={project.id}
      imgSrc={imgList[project.id]}
      alt={project.alt}
      title={project.title}
      description={project.description} />)
  }
  return formattedProjects;
}
