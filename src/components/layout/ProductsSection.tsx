import styles from "./ProductsSection.module.scss";
import { Product } from "../../services/products.types";

type ProductsSectionProps = {
  products: Product[];
};

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section aria-labelledby="products-title" className={styles.section}>
      <h2 id="products-title" className={styles.title}>
        Produtos
      </h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">Produto</th>
            <th scope="col">Categoria</th>
            <th scope="col">Preço</th>
            <th scope="col">Estoque</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>R$ {product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
