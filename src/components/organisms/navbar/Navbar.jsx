import styles from './Navbar.module.css';
import { reignStudiosLogo } from '../../../assets';

const LINKS = [
  { id: 1, name: 'Home', target: '#home' },
  { id: 2, name: 'About', target: '#about' },
  // { id: 3, name: 'Games', target: '#games' },
  { id: 4, name: 'Team', target: '#team' },
];

export const Navbar = () => {
  const renderLinks = () => {
    return (
      <ul className={styles.navLinkWrapper}>
        {LINKS.map((link) => (
          <li key={`nav-link-${link.id}`}>
            <a href={link.target}>{link.name}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.navbar}>
      <div className={'container'}>
        <div className={styles.logoWrapper}>
          <img alt={'reign-studio-logo'} src={reignStudiosLogo} />
        </div>

        <div>{renderLinks()}</div>
      </div>
    </div>
  );
};
