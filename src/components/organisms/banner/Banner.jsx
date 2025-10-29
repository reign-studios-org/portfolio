import { reignStudiosLogo } from '../../../assets';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <div id={'home'} className={styles.banner}>
      <img alt={'reign-studio-logo'} className={styles.bannerImage} src={reignStudiosLogo} />
    </div>
  )
};