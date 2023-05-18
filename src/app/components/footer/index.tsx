import globals from "../../globals.module.scss"
import styles from "./footer.module.scss"

export default function Footer() {
    return (      
        <footer className={`${styles.footer} ${globals.wrapper}`}>
          <small>
              Imagem de <a href="https://pixabay.com/pt/users/19541953-19541953/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5971939" target="_blank">Ludovico Gianotti</a> por <a href="https://pixabay.com/pt//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5971939" target="_blank">Pixabay</a>
          </small>
        </footer>
    )
}