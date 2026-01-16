import styles from "./dashboard.module.scss";
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
    <section
      aria-labelledby="products-title"
      className={styles.productsSection}
    >
      <h2 id="products-title" className={styles.productsTitle}>
        Produtos
      </h2>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.theader}>
                Produto
              </th>
              <th scope="col" className={styles.theader}>
                Categoria
              </th>
              <th scope="col" className={styles.theader}>
                Preço
              </th>
              <th scope="col" className={styles.theader}>
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
