import parentStyles from "../../resume/resume.module.scss"

/* eslint-disable react/no-unescaped-entities */
export default function LanguagesComponent() {
    return (
        <section>
            <h2>Languages</h2>
            <div>
                <ul className={parentStyles.inline}>
                    <li>Portuguese: Native</li>
                    <li>English: Fluent</li>
                </ul>
            </div>
        </section>
    )
}