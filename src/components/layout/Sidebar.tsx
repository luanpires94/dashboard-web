"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.sidebar} aria-label="Menu principal">
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/produtos"
            className={pathname === "/produtos" ? styles.active : ""}
          >
            Produtos
          </Link>
        </li>

        <li>
          <Link
            href="/usuarios"
            className={pathname === "/usuarios" ? styles.active : ""}
          >
            Usuários
          </Link>
        </li>

        <li>
          <Link
            href="/configuracoes"
            className={pathname === "/configuracoes" ? styles.active : ""}
          >
            Configurações
          </Link>
        </li>
      </ul>
    </nav>
  );
}
