import styles from './Socials.module.css';
import { Button } from '../../../atoms';

const SOCIALS = [
  { id: 1, icon: 'd', accumulatedText: '700k+ Followers' },
  { id: 2, icon: 'd', accumulatedText: '2.5M+ Subscribers' },
  { id: 3, icon: 'd', accumulatedText: '4M+ Members' },
  { id: 4, icon: 'd', accumulatedText: '20M+ Members' },
];

export const Socials = () => {
  return (
    <div className={'row'}>
      {SOCIALS.map((social) => {
        return (
          <div
            key={`milestone-social-button-${social.id}`}
            className={`${styles.buttonWrapper} col col-6 col-md-6 col-lg-3 mt-4`}
          >
            <Button content={() => <span>{social.accumulatedText}</span>} />
          </div>
        );
      })}
    </div>
  );
};
