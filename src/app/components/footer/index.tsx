import globals from "../../globals.module.scss"
import styles from "./footer.module.scss"

export default function Footer() {
    return (
      <footer className={`${styles.footer} ${globals.wrapper}`}>
        <div className="articlesList">
          <h4>Articles</h4>
          <ul>
            <li>
              <a href="" target="blank">Loyalty: Transmedia Strategies and Digital Marketing</a>
            </li>
            <li>
              <a href="" target="blank">Telemedicine in remote guidance during the pandemic</a>
            </li>
            <li>
              <a href="" target="blank">Gamification as an engagement strategy</a>
            </li>
            <li>
              <a href="" target="blank">Playing with fear, to conquer security</a>
            </li>
            <li>
              <a href="" target="blank">When it comes to MVP: “Done is better than perfect”</a>
            </li>
          </ul>
        </div>
        <small>
              <a href="https://github.com/users/maikelsalles/projects/1" target="_blank" title="Project repository">Planned</a>, <a href="https://www.figma.com/file/sO4RwR8UsUSSsYPdBZY8XD/Portfolio-Maikel-Salles-team-library?type=design&node-id=511%3A944&mode=design&t=fi917vyAy3CT37IY-1" target="_blank" title="Project repository">Designed</a> and <a href="https://github.com/maikelsalles/personalwebsite" target="_blank" title="Project repository">Coded</a>.
        </small>
      </footer>
    )
}