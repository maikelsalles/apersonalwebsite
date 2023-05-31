import { Metadata } from "next"
import styles from "../resume.module.scss"
import ResumeSidebar from "@components/resume/sidebar"
import ExperienceComponent from "@components/resume/experience"

export const metadata: Metadata = {
    title: "Experience - Resume - Maikel Salles",
    description: "Read about my previous experience."
}

export default function Experience() {

    return (
        <article className={styles.resumeContainer}>
            <ResumeSidebar/>
            <section className={styles.textContent}>
                <ExperienceComponent />
            </section>
        </article>
    )
}