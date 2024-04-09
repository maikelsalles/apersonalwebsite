import Link from "next/link"
import styles from "./button.module.scss"
import globals from "../../globals.module.scss"
import icons from "../../icons.module.scss"

type ButtonProps = {
  href?: string;
  customClass?: string | string[];
  label?: string;
  title?: string;
  type?: string;
  icon?: string;
  target?: string;
  disabled?: boolean;
  event?: () => void;
};

export default function Button({ type, href='', customClass, title, target, label, disabled, event, icon }: ButtonProps) {
  let customClassValue = '';
  if (typeof customClass === 'string') {
    customClassValue = globals[customClass] || '';
  } else if (Array.isArray(customClass)) {
    customClassValue = customClass.map(className => globals[className] || '').join(' ');
  }
  const iconValue = icon ? `${icons['icon']} ${icons[icon]}` : '';

  const targetValue = target? target : "_self";
  if (type === 'button'){
    return (
      <button
        type="submit"
        disabled={disabled}
        onClick={event}
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
      <Link
        href={href}
        target={targetValue}
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
      </Link>
    );
  }

  return (
    <Link
      href={href}
      passHref
      title={title}
      target={targetValue}
      className={`
        ${type === "nude" ? `${styles.nude} ${styles.button}` : styles.button}          
        ${type === "link" ? `${styles.link} ${styles.button}` : styles.button}
        ${customClassValue}
        ${iconValue}
      `}
    >
      {label}
    </Link>
  );
}