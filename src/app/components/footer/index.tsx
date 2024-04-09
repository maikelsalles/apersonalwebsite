import globals from "../../globals.module.scss"
import styles from "./footer.module.scss"

export default function Footer() {
    return (      
        <footer className={`${styles.footer} ${globals.wrapper}`}>
          <small>
                <a href="https://github.com/users/maikelsalles/projects/1" target="_blank" title="Project repository">Planned</a>, <a href="https://www.figma.com/file/sO4RwR8UsUSSsYPdBZY8XD/Portfolio-Maikel-Salles-team-library?type=design&node-id=511%3A944&mode=design&t=fi917vyAy3CT37IY-1" target="_blank" title="Project repository">Designed</a> and <a href="https://github.com/maikelsalles/personalwebsite" target="_blank" title="Project repository">Coded</a>.
          </small>
        </footer>
    )
}