import styles from "./SectionHeading.module.css"
// import useSectionHeadingPage from "./useSectionHeadingPage"

const SectionHeading = (
    { heading = "Our Top Categories!", subHeading = "त्योहार का एहसास हर बीतते पल में" }: { heading: string, subHeading?: string }
) => {

    return (
        <div className={`container ${styles.headingContainer}`}>
            <h1 className={styles.heading}>{heading}</h1>
            {subHeading && <p className={styles.subHeading}>{subHeading}</p>}
        </div>
    )
}

export default SectionHeading
