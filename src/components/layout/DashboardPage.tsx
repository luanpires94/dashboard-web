"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./DashboardPage.module.scss";
import { KpiSection } from "./KpiSection";
import { ProductsSection } from "./ProductsSection";
import { getProducts } from "../../services/products.service";
import { Product } from "../../services/products.types";
import { useDashboard } from "../dashboard/DashboardContext";

export function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { search } = useDashboard();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar produtos.</p>;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      <KpiSection products={filteredProducts} />
      <ProductsSection products={filteredProducts} />
    </section>
  );
}
