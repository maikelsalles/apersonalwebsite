import styles from "./stack.module.scss"
import parentStyles from "../../resume/resume.module.scss"

const stack = {
    title: "Stack",
    cats: [
        {
            title: "Design",
            items: [
                { name: "Design System and Guidelines", range: 70 },
                { name: "Figma", range: 100 },
                { name: "Adobe Suite", range: 90 },
                { name: "Sketch", range: 70 },
                { name: "UI Design", range: 50 },
            ]
        },
        {
            title: "Development",
            items: [
                { name: "Html 5", range: 100 },
                { name: "CSS3", range: 100 },
                { name: "JavaScript", range: 80 },
                { name: "TypeScript", range: 70 },
                { name: "Angular", range: 70 },
                { name: "React", range: 60 },
                { name: "NextJs", range: 60 },
                { name: "VueJs", range: 50 },
                { name: "WordPress", range: 90 },
                { name: "W3C, WCAG Standards", range: 100 },
                { name: "GIT", range: 80 },
                { name: "Azure DevOps", range: 50 },
                { name: "API Integration", range: 60 },
            ]
        }        
    ]
};

export default function Stack() {
    return (
        <section className={styles.skillsContainer}>
            <h2>{ stack.title }</h2>
            {stack.cats.map((cat) => (
                <div key={cat.title}>
                    <h3>{cat.title}</h3>
                    <ul className={parentStyles.inline}>
                        {cat.items.map((item) => (
                            <li key={item.name}
                                role="contentinfo"
                                aria-label={`${item.name}`}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}