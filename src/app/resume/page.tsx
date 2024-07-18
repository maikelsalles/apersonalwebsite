import { Metadata } from "next"
import styles from "./resume.module.scss"
import Experience from "@components/resume/experience"
import Education from "@components/resume/education"
import Stack from "@components/resume/stack"
import Languages from "@components/resume/languages"
import Button from "../components/button"

export const metadata: Metadata = {
    title: "Resume - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function Resume() {
    return (
        <article className={styles.resumeContainer}>
            <nav className={styles.sideSlider}>
                <a href="#experience" title="Experience" aria-label="Experience"></a>
                <a href="#education" title="Education" aria-label="Education"></a>
                <a href="#stack" title="Stack" aria-label="Stack"></a>
                <a href="#languages" title="Languages" aria-label="Languages"></a>
            </nav>
            <div className={styles.titleContainer}>
                <h1>Resume</h1>
            </div>
            <Experience />
            <Education />
            <Stack />
            <Languages />
        </article>
    )
}