import { reignPieceBackground2 } from '@assets';
import styles from './LandingSection.module.css';

export const LandingSection = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.imageWrapper}>
        <img
          alt={'Reign Piece Banner Background'}
          src={reignPieceBackground2}
          aria-hidden="true"
          className={styles.bannerImage}
        />
        {/* This layer handles the blur/fade transition at the bottom */}
        <div className={styles.blurLayer}></div>
        {/* This layer handles noise and side blending */}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>REIGN STUDIO</h1>
        <p className={styles.subtitle}>Start your journey in the grand line.</p>
      </div>
    </section>
  );
};
