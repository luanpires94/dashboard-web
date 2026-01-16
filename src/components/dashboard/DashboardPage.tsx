"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./dashboard.module.scss";
import { KpiSection } from "./KpiSection";
import { ProductsSection } from "./ProductsSection";
import { getProducts } from "../../services/products.service";
import { Product } from "../../services/products.types";
import { useDashboard } from "../dashboard/DashboardContext";

export function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { search, category, setCategories } = useDashboard();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.products);

        const uniqueCategories = Array.from(
          new Set(data.products.map((p) => p.category))
        );

        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [setCategories]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produtos.</p>;
  }

  return (
    <section className={styles.dashboardContainer}>
      <h1 className={styles.title}>Dashboard</h1>

      <KpiSection products={filteredProducts} />
      <ProductsSection products={filteredProducts} />
    </section>
  );
}
