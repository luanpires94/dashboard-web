import styles from "./DashboardPage.module.scss";
import { KpiSection } from "./KpiSection";
import { ProductsSection } from "./ProductsSection";

export function DashboardPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      <KpiSection />
      <ProductsSection />
    </section>
  );
}
