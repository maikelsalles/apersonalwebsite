import Link from "next/link"
import styles from "./button.module.scss"
import globals from "../../globals.module.scss"

type ButtonProps = {
  href: string;
  customClass: string;
  children: React.ReactNode;
};

export default function Button({ href, customClass, children }: ButtonProps) {
  if (typeof href === 'string' && (href.startsWith('http') || href.startsWith('https'))) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${globals[customClass]}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <a className={`${styles.button} ${globals[customClass]}`}>
        {children}
      </a>
    </Link>
  );
}