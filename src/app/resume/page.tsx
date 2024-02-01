import { Metadata } from "next"
import styles from "./resume.module.scss"
import Skills from "@components/resume/skills"
import ResumeSidebar from "@components/resume/sidebar"

export const metadata: Metadata = {
    title: "Resume - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function Resume() {
    return (
        <article className={styles.resumeContainer}>
            <ResumeSidebar />
            <section className={styles.textContent}>
                <Skills />
            </section>
        </article>
    )
}