import { Metadata } from "next"
import styles from "./resume.module.scss"
import Experience from "@components/resume/experience"
import Education from "@components/resume/education"
import Stack from "@components/resume/stack"
import Languages from "@components/resume/languages"

export const metadata: Metadata = {
    title: "Resume - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function Resume() {
    return (
        <article className={styles.resumeContainer}>
            <Experience />
            <Education />
            <Stack />
            <Languages />
        </article>
    )
}