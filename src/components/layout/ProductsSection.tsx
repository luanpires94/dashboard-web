import styles from "./ProductsSection.module.scss";
import { Product } from "../../services/products.types";

type ProductsSectionProps = {
  products: Product[];
};

export function ProductsSection({ products }: ProductsSectionProps) {
  if (products.length === 0) {
    return (
      <section aria-labelledby="products-title" className={styles.section}>
        <h2 id="products-title" className={styles.title}>
          Produtos
        </h2>

        <p className={styles.empty}>Nenhum produto encontrado.</p>
      </section>
    );
  }

  return (
    <section aria-labelledby="products-title" className={styles.section}>
      <h2 id="products-title" className={styles.title}>
        Produtos
      </h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeader} scope="col">
                Produto
              </th>
              <th className={styles.tHeader} scope="col">
                Categoria
              </th>
              <th className={styles.tHeader} scope="col">
                Preço
              </th>
              <th className={styles.tHeader} scope="col">
                Estoque
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className={styles.infoProduct}>{product.title}</td>
                <td className={styles.infoProduct}>{product.category}</td>
                <td className={styles.infoProduct}>
                  R$ {product.price.toFixed(2)}
                </td>
                <td className={styles.infoProduct}>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
