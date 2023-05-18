import Link from "next/link"
  import styles from "./button.module.scss"
  import globals from "../../globals.module.scss"

export default function Button({ href, customClass, children }) {
  if (typeof href === 'string' && (href.startsWith('http') || href.startsWith('https'))) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${globals[customClass]}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} passHref>
      <a className={`${styles.button} ${styles.customClass}`}>
        {children} 
      </a>
    </Link>
  );
}

// return <a href="https://www.linkedin.com/in/maikelsalles" className={`${styles.button} ${icons.icon}`} target="_blank">Follow me on LinkedIn</a>;