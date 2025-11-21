import React from 'react';
import robo from '../../assets/robo.png';
import heli from '../../assets/cccce.png';
import jav from '../../assets/raytt.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            src={robo}
            link="https://github.com/CalebJ28/Autonomous-Bluetooth-Veichle-"
            h3="Autonomous Bluetooth Vehicle"
            p="Arduino, C++/C, Robot Car project"
          />
          <ProjectCard
            src={heli}
            link="https://github.com/CalebJ28/HelicopterEscapes"
            h3="HelicopterEscapes"
            p="Python, Data Visualization project"
          />
          <ProjectCard
            src={jav}
            link="https://github.com/CalebJ28/RayTracing/tree/master"
            h3="RayTracing Application"
            p="RayTracing, GPU & C/C++ project"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;