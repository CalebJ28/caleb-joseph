import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return ( <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        < ProjectCard src={Test project} link="https://github.com/CalebJ28/Autonomous-Bluetooth-Veichle-" h3="Filler" p="Test project"/>
        < ProjectCard src={Test project} link="https://github.com/CalebJ28/ELE404" h3="Filler" p="Test project"/>
        < ProjectCard src={Test project} link="https://github.com/CalebJ28/COE318" h3="Filler" p="Test project"/>
    </div>
    </section>
  )
}

export default Projects