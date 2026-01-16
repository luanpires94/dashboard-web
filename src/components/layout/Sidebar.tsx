import Link from "next/link";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <nav className={styles.sidebar} aria-label="Menu principal">
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
        <li>
          <Link href="/usuarios">Usuários</Link>
        </li>
        <li>
          <Link href="/configuracoes">Configurações</Link>
        </li>
      </ul>
    </nav>
  );
}
