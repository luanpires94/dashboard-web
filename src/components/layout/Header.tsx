"use client";

import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { useDashboard } from "../dashboard/DashboardContext";

export function Header() {
  const pathname = usePathname();
  const showSearch = pathname === "/";

  const { search, setSearch } = useDashboard();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Dashboard</div>

      <div className={styles.center}>
        {showSearch && (
          <form role="search" className={styles.search}>
            <input
              type="search"
              placeholder="Buscar produtos"
              aria-label="Buscar produtos"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        )}
      </div>

      <div className={styles.user}>Usuário</div>
    </div>
  );
}
