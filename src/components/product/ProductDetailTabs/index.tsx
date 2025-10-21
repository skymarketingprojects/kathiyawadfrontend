import type { ProductTabType } from "../../../types/content"
import styles from "./ProductDetailTabs.module.css"
import useProductDetailTabsPage from "./useProductDetailTabsPage"

const ProductDetailTabs = ({ productTabs }: { productTabs: ProductTabType[] }) => {
    const { tabs, activeTab,
        handleTabClick, } = useProductDetailTabsPage(productTabs)
    return (
        <div className={`container ${styles.mainContainer}`}>
            <div>
                {/* Tab Container */}
                <div className={styles.tabsContainer}>
                    {/* Render tab buttons */}
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => handleTabClick(tab.value)}
                            className={`${styles.tab} ${activeTab === tab.value ? styles.activeTab : ""}`} // Apply active styles dynamically
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                <div className={`${styles.tabContent}`}>
                    <div>
                        <h2>{activeTab}</h2>
                        <p>Content for {activeTab} tab goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailTabs
