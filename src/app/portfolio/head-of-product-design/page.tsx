import { Metadata } from "next"
import styles from "../portfolio.module.scss"
import Image from 'next/image'
import Button from "@/app/components/button";

import icons from "../../icons.module.scss";

import img1 from "@img/portfolio/head-of-product-design-test-system.jpg";
import img2 from "@img/portfolio/head-of-product-design-design-system.jpg";

export const metadata: Metadata = {
    title: "Design System Engineer - Portfolio - Maikel Salles",
    description: "Read about my archivements over 10 years of experience."
}

export default function Resume() {
    return (
        <article className={styles.resumeContainer}>
            <div className={styles.titleContainer}>
                <h1>Head of Product Design</h1>
            </div>
            <section id="personal-website" className={styles.caseContainer}>
                <div>
                    <p>
                        As the Head of Design at DBC Company consulting for Ticket Log by Edenred, I faced the challenge of ensuring a unified and seamless experience across our digital products in terms of design and user experience. I proposed a new design process and initiated a Design System project, which proved to be the most intricate yet time-saving transformation the company has ever undertaken.
                    </p>
                    <p>
                        Recognizing the need for leadership to streamline internal processes and reduce excessive revisions in prototype development, so I volunteered to lead the design team. At the time, with only four designers reporting directly to product owners and minimal communication among them, I saw the opportunity to establish clearer channels of communication, standardize processes, and enhance the efficiency and quality of our design outputs.
                    </p>
                    <h3>Build a design department from scratch</h3>
                    <p>
                        Building a design department from scratch involved assessing organizational needs and objectives, defining roles and responsibilities for over 10 product designers, recruiting talented individuals aligned with company culture, establishing standardized processes and workflows, implementing necessary tools and technologies, fostering collaboration within and across teams, promoting continuous learning and development, and measuring effectiveness through metrics for ongoing improvement.
                    </p>
                    <h3>Team work and collaboration</h3>
                    <p>
                        We started implementing regular workshops to encourage knowledge sharing. Each designer had the opportunity to showcase the strongest skills of their choice, enriching the team's collective expertise and better equipping us to tackle our daily tasks collaboratively. Some of these workshops where about Design thinking, Research, Writing, Figma, tests, and best practices.
                    </p>
                </div>
                <div>
                    <h3>A smart testing system</h3>
                    <p>I promoted automation for user testing scheduling by utilizing existing but underutilized company tools. Through streamlined communication and automation of design and IT boards, we facilitated efficient stakeholder participation in prototype testing, ensuring a comprehensive understanding of end user needs throughout product development.</p>
                    <p>With this process, teams no longer need to make calls or send emails to schedule meetings with stakeholders, as user testing scheduling is automated through streamlined communication and board automation. This saves time and effort, allowing teams to focus on more critical tasks while ensuring efficient stakeholder participation in prototype testing.</p>
                </div>
                <div className={styles.advise}>
                    <span className={`${icons.info} ${icons.icon}`}></span>
                    The details of this project are confidential, however, I can provide a brief overview.
                </div>
                <picture>
                    <source srcSet={img1.src} />
                    <Image src={img1} alt="" />
                </picture>
                <div>
                    <h3>Design System Initiative</h3>
                    <p>Demonstrating initiative, I enthusiastically embraced the idea of initiating a design system within the company, recognizing the significant challenge posed by its large scale and numerous legacy products. Presenting the concept to the directors, I supported my proposal with extensive research, outlining the benefits and justifying the necessity of such a move. Today, we have a dedicated team committed to this project, which has evolved into a product characterized by continuous and collaborative improvement.</p>
                </div>
                <picture>
                    <source srcSet={img2.src} />
                    <Image src={img2} alt="" />
                </picture>
                <div>
                    <p>
                        Moving forward, I am committed to leveraging this wealth of knowledge and experience to support my new colleagues and continue driving positive changes wherever I contribute.
                    </p>
                </div>
            </section>
            <Button href="/portfolio" icon="long-arrow-alt-left" label="Back to Portfolio"/>
        </article>
    )
}