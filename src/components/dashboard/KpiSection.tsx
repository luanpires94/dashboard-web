import styles from "./dashboard.module.scss";
import { Product } from "../../services/products.types";

type KpiSectionProps = {
  products: Product[];
};

export function KpiSection({ products }: KpiSectionProps) {
  const totalProducts = products.length;

  const averagePrice =
    totalProducts > 0
      ? products.reduce((sum, p) => sum + p.price, 0) / totalProducts
      : 0;

  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  const categories = new Set(products.map((p) => p.category));

  return (
    <section aria-labelledby="kpi-title" className={styles.kpiSection}>
      <h2 id="kpi-title" className={styles.kpiTitle}>
        Visão geral
      </h2>

      <div className={styles.kpiGrid}>
        <div className={styles.kpiCard}>
          <strong>{totalProducts}</strong>
          <span>Produtos</span>
        </div>

        <div className={styles.kpiCard}>
          <strong>R$ {averagePrice.toFixed(2)}</strong>
          <span>Preço médio</span>
        </div>

        <div className={styles.kpiCard}>
          <strong>{categories.size}</strong>
          <span>Categorias</span>
        </div>

        <div className={styles.kpiCard}>
          <strong>{totalStock}</strong>
          <span>Itens em estoque</span>
        </div>
      </div>
    </section>
  );
}
