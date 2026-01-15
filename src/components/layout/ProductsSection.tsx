import styles from "./ProductsSection.module.scss";

export function ProductsSection() {
  return (
    <section aria-labelledby="products-title" className={styles.section}>
      <h2 id="products-title" className={styles.title}>
        Produtos
      </h2>

      <div className={styles.placeholder}>Lista de produtos</div>
    </section>
  );
}
