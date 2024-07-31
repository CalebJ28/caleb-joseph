import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Technical Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Python" />
            <SkillList src={checkMarkIcon} skill="Java" />
            <SkillList src={checkMarkIcon} skill="C/C++" />
            <SkillList src={checkMarkIcon} skill="VHDL" />
            <SkillList src={checkMarkIcon} skill="Verilog" />
            <SkillList src={checkMarkIcon} skill="Perl" />
            <SkillList src={checkMarkIcon} skill="Bash/CSH" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="Node" />
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Arduino" />
            <SkillList src={checkMarkIcon} skill="RTL" />
            <SkillList src={checkMarkIcon} skill="ASIC/FPGA" />
            <SkillList src={checkMarkIcon} skill="UVM" />
            <SkillList src={checkMarkIcon} skill="Linux" />
            <SkillList src={checkMarkIcon} skill="UNIX" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Verification" />
            <SkillList src={checkMarkIcon} skill="Validation" />
            <SkillList src={checkMarkIcon} skill="Debugging" />
            <SkillList src={checkMarkIcon} skill="Scripting" />
            <SkillList src={checkMarkIcon} skill="Computer Architecture" />
        </div>
    </section>

  )
}

export default Skills