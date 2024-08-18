import styles from './ProjectsStyles.module.css'
import robo from '../../assets/robo.png'
import heli from '../../assets/cccce.png'
import jav from '../../assets/raytt.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return ( <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        < ProjectCard src={robo} link="https://github.com/CalebJ28/Autonomous-Bluetooth-Veichle-" h3="Autonomous Bluetooth Vehicle" p="Arduino, C++/C, Robot Car project"/>
        < ProjectCard src={heli} link="https://github.com/CalebJ28/HelicopterEscapes" h3="HelicopterEscapes" p="Python, Data Visualization project"/>
        < ProjectCard src={jav} link="https://github.com/CalebJ28/RayTracing/tree/master" h3="RayTracing Application" p="RayTracing, GPU & C/C++ project"/>
    </div>
    </section>
  )
}

export default Projects