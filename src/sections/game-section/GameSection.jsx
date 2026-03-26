import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { GAMES } from '@constants';
import { formatNumber } from '@utils';
import styles from './GameSection.module.css';

const AUTO_PLAY_INTERVAL = 5000; // 5 Seconds

export const GameSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const game = GAMES[activeIndex];

  useEffect(() => {
    // 1. Set up the timer
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % GAMES.length);
    }, AUTO_PLAY_INTERVAL);

    // 2. Clean up the timer
    // This runs whenever activeIndex changes or the component unmounts.
    // By clearing the interval here, manual clicks "reset" the 5s countdown.
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleManualToggle = (index) => {
    setActiveIndex(index);
  };

  const openGameInRoblox = (placeId) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android device
      const intentUrl = `intent://placeId=${placeId}#Intent;scheme=roblox;package=com.roblox.client;end`;
      window.location.href = intentUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device
      const appUrl = `roblox://placeId=${placeId}`;
      const fallbackUrl = `https://www.roblox.com/games/${placeId}`;

      window.location.href = appUrl;
      setTimeout(() => {
        window.location.href = fallbackUrl;
      }, 1500);
    } else {
      // Desktop fallback
      window.location.href = `roblox://placeId=${placeId}`;
    }
  };

  return (
    <section aria-label={'Our Games'} className={styles.gameSection}>
      <div className={styles.gameContainer}>
        {/* LEFT SIDE: Content */}
        <div className={styles.detailsSide}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.gameTitle} key={`title-${game.id}`}>
              {game.name}
            </h2>

            <div className={styles.statBox}>
              <span className={styles.statValue}>
                {formatNumber(game.gameVisits)}
              </span>
              <span className={styles.statLabel}>Total Game Visits</span>
            </div>

            <div className={styles.buttonGroup}>
              <button
                className={styles.playBtn}
                onClick={() => openGameInRoblox(game.experienceId)}
                type={'button'}
              >
                Play Now
              </button>
              <a
                href={`https://www.roblox.com/games/${game.experienceId}`}
                target="_blank"
                rel="noreferrer"
                className={styles.viewBtn}
              >
                View Page
              </a>
            </div>

            {/* Navigation Bars */}
            <nav className={styles.navContainer}>
              {GAMES.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Show ${GAMES[idx].name}`}
                  className={clsx(
                    styles.navBar,
                    activeIndex === idx ? styles.activeBar : '',
                  )}
                  onClick={() => handleManualToggle(idx)}
                />
              ))}
            </nav>
          </div>
        </div>

        {/* RIGHT SIDE: Slanted Image */}
        <div className={styles.imageSide}>
          <img
            key={game.id} // Triggers CSS animation on image change
            alt={`${game.name} Game Preview`}
            className={styles.gameImage}
            src={game.image}
          />
        </div>
      </div>
    </section>
  );
};
