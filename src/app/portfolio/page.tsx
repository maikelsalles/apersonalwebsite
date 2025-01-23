import { Metadata } from "next"
import styles from "./portfolio.module.scss"
import globals from "../globals.module.scss"
import Image from 'next/image'
import Button from "../components/button"

import img1 from "@img/portfolio/design-system-engineer-thumbnail.png";
import img2 from "@img/portfolio/head-of-product-design-thumbnail.png";
import img3 from "@img/portfolio/medical-platform-thumbnail.png";
import img4 from "@img/portfolio/personal-website-thumbnail.png";

export const metadata: Metadata = {
    title: "Portfolio - Maikel Salles",
    description: "An overview on my latest projects."
}

export default function Portfolio() {
    return (
        <article className={`${styles.portfolioContainer} ${globals.wrapper}`}>
            <div className={styles.titleContainer}>
                <h1>Portfolio</h1>
            </div>
            <section>
                <h2>Design System</h2>
                <picture>
                    <source srcSet={img1.src} />
                        <a href="portfolio/design-system" rel="nofollow" title="View Details">
                            <Image src={img1} alt="A set of images of print screens from the project." />
                        </a>
                </picture>
                <Button href="portfolio/design-system" icon="long-arrow-alt-right" label="View details"/>
            </section>
            <section>
                <h2>Product Design</h2>
                <picture>
                    <source srcSet={img2.src} />
                    <a href="portfolio/product-design" rel="nofollow" title="View Details">
                        <Image src={img2} alt="A set of images of print screens from the project." />
                    </a>
                </picture>
                <Button href="portfolio/product-design" icon="long-arrow-alt-right" label="View details"/>
            </section>
            <section>
                <h2>Medical Platform</h2>
                <picture>
                    <source srcSet={img3.src} />
                    <a href="portfolio/medical-platform" rel="nofollow" title="View Details">
                        <Image src={img3} alt="A set of images of print screens from the project." />
                    </a>
                </picture>
                <Button href="portfolio/medical-platform" icon="long-arrow-alt-right" label="View details"/>
            </section>
            <section>
                <h2>Personal Website</h2>
                <picture>
                    <source srcSet={img4.src} />
                    <a href="portfolio/personal-website" rel="nofollow" title="View Details">
                        <Image src={img4} alt="A set of images of print screens from the project." />
                    </a>
                </picture>
                <Button href="portfolio/personal-website" icon="long-arrow-alt-right" label="View details"/>
            </section>
        </article>
    )
}