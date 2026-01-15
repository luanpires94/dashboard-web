import styles from "./KpiSection.module.scss";

export function KpiSection() {
  return (
    <section aria-labelledby="kpi-title" className={styles.section}>
      <h2 id="kpi-title" className={styles.title}>
        Visão geral
      </h2>

      <div className={styles.grid}>
        <div className={styles.card}>KPI 1</div>
        <div className={styles.card}>KPI 2</div>
        <div className={styles.card}>KPI 3</div>
        <div className={styles.card}>KPI 4</div>
      </div>
    </section>
  );
}
