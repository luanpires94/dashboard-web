import styles from "./DashboardLayout.module.scss";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>

      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
