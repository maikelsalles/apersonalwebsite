import globals from "../../globals.module.scss"
import styles from "./input.module.scss"

type Input = {
  name: string;
  label: string;
  type: string;
  customClass?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  size: number;
};

export default function Input({ name, label, size, type, customClass, placeholder, value, required }: Input) {
    const customClassValue = customClass ? globals[customClass] : '';
    return (
        <div className={`${styles.inputContainer} ${size === 2 ? globals.w50 : globals.w100}`}>
            <label>
                <span>{label}</span>
                <input
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={`${styles.input} ${customClassValue}`}
                    required={required}
                />
            </label>
        </div>
    );
}