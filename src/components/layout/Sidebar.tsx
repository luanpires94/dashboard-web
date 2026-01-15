import styles from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <nav className={styles.sidebar} aria-label="Menu lateral">
      <ul>
        <li>Dashboard</li>
        <li>Produtos</li>
        <li>Usuários</li>
        <li>Configurações</li>
      </ul>
    </nav>
  );
}
