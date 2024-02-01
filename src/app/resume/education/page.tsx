import { Metadata } from "next"
import styles from "../resume.module.scss"
import ResumeSidebar from "@components/resume/sidebar"
import EducationComponent from "@components/resume/education"

export const metadata: Metadata = {
    title: "Education - Resume - Maikel Salles",
    description: "Read about my previous experience."
}

export default function Education() {

    return (
        <article className={styles.resumeContainer}>
            <ResumeSidebar/>
            <section className={styles.textContent}>
                <EducationComponent />
            </section>
        </article>
    )
}