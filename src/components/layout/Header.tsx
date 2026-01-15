import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Dashboard</div>

      <form role="search" className={styles.search}>
        <input
          type="search"
          placeholder="Buscar produtos"
          aria-label="Buscar produtos"
        />
      </form>

      <div className={styles.user}>Usuário</div>
    </div>
  );
}
