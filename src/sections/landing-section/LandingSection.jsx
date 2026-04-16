import styles from './LandingSection.module.css';

export const LandingSection = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>REIGN STUDIOS</h1>
        <p className={styles.subtitle}>EST. 2025</p>
      </div>
    </section>
  );
};