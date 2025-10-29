import styles from './MilestoneSection.module.css';
import { Socials } from './socials';
import { Statistics } from './statistics';

export const MilestoneSection = () => {
  return (
    <div className={styles.milestoneSection}>
      <div className={'container pb-4'}>
        <Statistics />
        <Socials />
      </div>
    </div>
  );
};
