"use client";

import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { useDashboard } from "../dashboard/DashboardContext";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();
  const showControls = pathname === "/";

  const { search, setSearch, category, setCategory, categories } =
    useDashboard();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" aria-label="Ir para o Dashboard">
          <img
            src="https://png.pngtree.com/png-vector/20230302/ourmid/pngtree-dashboard-line-icon-vector-png-image_6626604.png"
            width={50}
            height={50}
            alt="Dashboard"
            className={styles.logoImage}
          />
        </Link>
      </div>

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
              className={styles.select}
              aria-label="Filtrar por categoria"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">Todas</option>

              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className={styles.user}>
        <img src="images/avatar.png" alt="admin" className={styles.avatar} />
        <span className={styles.username}>Admin</span>
      </div>
    </div>
  );
}
