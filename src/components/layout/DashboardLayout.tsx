import styles from "./DashboardLayout.module.scss";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { DashboardProvider } from "../dashboard/DashboardContext";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <DashboardProvider>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Header />
        </header>

        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>

        <main className={styles.main}>{children}</main>
      </div>
    </DashboardProvider>
  );
}
