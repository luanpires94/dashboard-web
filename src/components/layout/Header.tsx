"use client";

import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

export function Header() {
  const pathname = usePathname();

  const showSearch = pathname === "/";

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Dashboard</div>

      <div>
        {showSearch && (
          <form role="search" className={styles.search}>
            <input
              type="search"
              placeholder="Buscar produtos"
              aria-label="Buscar produtos"
            />
          </form>
        )}
      </div>
      <div className={styles.user}>Usuário</div>
    </div>
  );
}
