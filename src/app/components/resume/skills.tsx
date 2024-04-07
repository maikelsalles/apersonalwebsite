import styles from "./skills.module.scss"

const skills = {
    title: "Technical Skills",
    cats: [
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
        },
        {
            title: "Design",
            items: [
                { name: "Design System and Guidelines", range: 70 },
                { name: "Figma", range: 100 },
                { name: "Adobe Suite", range: 90 },
                { name: "Sketch", range: 70 },
                { name: "UI Design", range: 50 },
            ]
        }
    ]
};

export default function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h2>{ skills.title }</h2>
            {skills.cats.map((cat) => (
                <div key={cat.title}>
                    <h3>{cat.title}</h3>
                    <ul>
                        {cat.items.map((item) => (
                            <li key={item.name}
                                role="contentinfo"
                                data-range={item.range}
                                aria-label={`${item.name}: Proficiency level: ${item.range}%`}
                                title={`Proficiency level: ${item.range}%`}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}