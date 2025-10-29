import { FaDiscord, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SiRoblox } from 'react-icons/si';
import styles from './SocialSection.module.css';
import { Button } from '../../atoms';

export const SocialSection = () => {
  return (
    <div className={styles.socialSection}>
      <div className={'container'}>
        <div className={styles.socialContentWrapper}>
          <h4>Get the latest updates and more.</h4>
          <h4>Join our community today!</h4>
          <div className={styles.socialLinkWrapper}>
            <Button content={() => <FaXTwitter />} />
            <Button content={() => <FaYoutube />} />
            <Button content={() => <FaDiscord />} />
            <Button content={() => <SiRoblox />} />
          </div>
        </div>
      </div>
    </div>
  );
};
