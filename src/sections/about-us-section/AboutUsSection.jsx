import clsx from 'clsx';
import styles from './AboutUsSection.module.css';

export const AboutUsSection = () => {
  return (
    <section aria-labelledby="about-us-title">
      <div className={clsx(styles.aboutUs, 'mx-auto px-4 md:px-12 w-full max-w-[1600px] text-center')}>
        <h2 id="about-us-title" className={styles.sectionTitle}>
          About Us
        </h2>

        <div className={styles.content}>
          <p>
            REIGN STUDIOS is a next-generation Roblox development team focused
            on building ambitious, high-impact experiences designed to stand
            apart. With a clear vision and a drive to innovate, the studio is
            committed to shaping projects that feel polished, memorable, and
            built for scale.
          </p>

          <p className={styles.quote}>
            "We're not here to follow trends — we're here to define what comes
            next. REIGN STUDIOS is focused on creating experiences that
            challenge expectations and set a new benchmark for what players can
            expect on Roblox."
          </p>

          <p className={styles.signature}>- REIGN STUDIOS Team</p>
        </div>
      </div>
    </section>
  );
};
