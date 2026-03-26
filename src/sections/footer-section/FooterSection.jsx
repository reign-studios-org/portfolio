import { reignStudioLogo } from '@assets';
import styles from './FooterSection.module.css';

export const FooterSection = () => {
  return (
    <div className={styles.footerSection}>
      <img alt={'Reign Studio Logo'} className={styles.logo} src={reignStudioLogo} />
      <span>© 2025 Reign Studio LLC - All Rights Reserved</span>
    </div>
  );
};
