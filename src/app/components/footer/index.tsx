import globals from "../../globals.module.scss"
import styles from "./footer.module.scss"

export default function Footer() {
    return (      
        <footer className={`${styles.footer} ${globals.wrapper}`}>
          <small>
              <a href="https://github.com/maikelsalles/personalwebsite" target="_blank" title="Project repository">About this project</a>
          </small>
        </footer>
    )
}