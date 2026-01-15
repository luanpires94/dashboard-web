import styles from "./KpiSection.module.scss";
import { Product } from "../../services/products.types";

type KpiSectionProps = {
  products: Product[];
};

export function KpiSection({ products }: KpiSectionProps) {
  const totalProducts = products.length;

  const averagePrice =
    products.reduce((sum, p) => sum + p.price, 0) / totalProducts;

  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  const categories = new Set(products.map((p) => p.category));

  return (
    <section aria-labelledby="kpi-title" className={styles.section}>
      <h2 id="kpi-title" className={styles.title}>
        Visão geral
      </h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <strong>{totalProducts}</strong>
          <span>Produtos</span>
        </div>

        <div className={styles.card}>
          <strong>R$ {averagePrice.toFixed(2)}</strong>
          <span>Preço médio</span>
        </div>

        <div className={styles.card}>
          <strong>{categories.size}</strong>
          <span>Categorias</span>
        </div>

        <div className={styles.card}>
          <strong>{totalStock}</strong>
          <span>Itens em estoque</span>
        </div>
      </div>
    </section>
  );
}
