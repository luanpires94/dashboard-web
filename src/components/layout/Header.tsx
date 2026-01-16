"use client";

import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { useDashboard } from "../dashboard/DashboardContext";

export function Header() {
  const pathname = usePathname();
  const showControls = pathname === "/";

  const { search, setSearch, category, setCategory } = useDashboard();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Dashboard</div>

      <div className={styles.center}>
        {showControls && (
          <div className={styles.controls}>
            <form role="search" className={styles.search}>
              <input
                type="search"
                placeholder="Buscar produtos"
                aria-label="Buscar produtos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <select
              aria-label="Filtrar por categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.select}
            >
              <option value="all">Todas</option>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
              <option value="fragrances">Fragrâncias</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Mercado</option>
            </select>
          </div>
        )}
      </div>

      <div className={styles.user}>Usuário</div>
    </div>
  );
}
