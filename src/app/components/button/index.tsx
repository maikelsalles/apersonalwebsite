import Link from "next/link"
import styles from "./button.module.scss"
import globals from "../../globals.module.scss"
import icons from "../../icons.module.scss"

type ButtonProps = {
  href?: string;
  customClass?: string;
  label?: string;
  title?: string;
  type?: string;
  icon?: string;
  target?: string;
};

export default function Button({ type, href='', customClass, title, target, label, icon }: ButtonProps) {
  const customClassValue = customClass ? globals[customClass] : '';
  const iconValue = icon ? icons[icon] : '';

  if (type === 'submit'){
    return (
      <button
        type="submit"
        className={`
          ${styles.button}
          ${customClassValue}
          ${iconValue}
        `}
      >
        {label}
      </button>
    )
  }
  if (typeof href === 'string' && (href.startsWith('http') || href.startsWith('https'))) {
    return (
      <a
        href={href}
        target={target}
        title={title}
        rel="noopener noreferrer"
        className={`
          ${type === "nude" ? `${styles.nude} ${styles.button}` : styles.button}
          ${type === "link" ? `${styles.link} ${styles.button}` : styles.button}
          ${customClassValue}
          ${iconValue}
        `}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <a
        title={title}
        target={target}
        className={`
          ${type === "nude" ? `${styles.nude} ${styles.button}` : styles.button}          
          ${type === "link" ? `${styles.link} ${styles.button}` : styles.button}
          ${customClassValue}
          ${iconValue}
        `}
      >
        {label}
      </a>
    </Link>
  );
}