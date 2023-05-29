import styles from "./skills.module.scss"

export default function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h2>Technical Skills</h2>
            <h3>Languages</h3>
            <ul>
                <li data-range="50">HTML5</li>
                <li data-range="30">CSS3</li>
                <li data-range="50">Javascript</li>
                <li data-range="100">TypeScript</li>
                <li data-range="80">css</li>
                <li data-range="80">js</li>
                <li data-range="60">html</li>
                <li data-range="50">css</li>
            </ul>
            <h3>Design</h3>
            <ul>
                <li data-range="50">js</li>
                <li data-range="80">html</li>
                <li data-range="100">html</li>
                <li data-range="50">css</li>
                <li data-range="40">js</li>
                <li data-range="50">css</li>
                <li data-range="30">js</li>
                <li data-range="80">html</li>
                <li data-range="90">css</li>
                <li data-range="100">js</li>
            </ul>
        </div>
    )
}