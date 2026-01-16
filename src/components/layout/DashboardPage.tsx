import styles from "./DashboardPage.module.scss";
import { KpiSection } from "./KpiSection";
import { ProductsSection } from "./ProductsSection";
import { getProducts } from "../../services/products.service";

export async function DashboardPage() {
  const { products } = await getProducts();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      <KpiSection products={products} />
      <ProductsSection products={products} />
    </section>
  );
}
