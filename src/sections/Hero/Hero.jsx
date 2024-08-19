import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/faceicon.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import githubLight from "../../assets/github-light.svg";
import mailLight from "../../assets/email-light.png";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import mailDark from "../../assets/email-dark.png";
import CV from "../../assets/Caleb_Joseph_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark
  const GithubIcon = theme === "light" ? githubLight : githubDark
  const EmailIcon = theme === "light" ? mailLight : mailDark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile picture of Caleb Joseph"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        ></img>
      </div>
      <div className={styles.info}>
        <h1>
          Caleb
          <br />
          Joseph
        </h1>
        <h2>Computer Engineer</h2>{" "}
        <span>
          <a href="https://www.linkedin.com/in/calebj28/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon"></img>
          </a>
          <a href="https://github.com/Calebj28" target="_blank">
            <img src={GithubIcon} alt="Github Icon"></img>
          </a>
          <a
            href="mailto:caleb.joseph@torontomu.ca?body=My custom mail body"
            target="_blank"
          >
            <img src={EmailIcon} alt="Email Icon"></img>
          </a>
        </span>
        <p className={styles.description}>
          Passionate about CPU/GPU/SoC architecture, hardware design and
          verification, and systems software development.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
