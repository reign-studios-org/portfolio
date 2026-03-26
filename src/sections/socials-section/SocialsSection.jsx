import { useEffect, useState } from 'react';
import { FaDiscord, FaGamepad } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiRoblox } from 'react-icons/si';
import { SOCIALS } from '@constants';
import { formatNumber } from '@utils';
import styles from './SocialsSection.module.css';

const getSocialIcon = (type) => {
  switch (type) {
    case 'discord': return <FaDiscord />;
    case 'roblox': return <SiRoblox />;
    case 'gameVisit': return <FaGamepad />;
    case 'xTwitter': return <FaXTwitter />;
    default: return null;
  }
};

export const SocialsSection = () => {
  const [stats, setStats] = useState({
    discord: 0,
    roblox: 112201,
    x: 501,
    game: 3444108,
  });

  useEffect(() => {
    let isMounted = true;

    // Fetch the discord members count
    fetch('https://discord.com/api/v9/invites/ZrnBZkA4?with_counts=true')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted)
          setStats((prev) => ({
            ...prev,
            discord: data.approximate_member_count || 0,
          }));
      })
      .catch(() => console.error('Discord fetch failed'));

    // Fetch the count of roblox members
    // fetch('https://groups.roblox.com/v1/groups/759293173')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     if (isMounted) setRobloxMembersCount(data.memberCount || 0);
    //   })
    //   .catch(() => {
    //     if (isMounted) setRobloxMembersCount(0);
    //   });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section aria-labelledby="socials-title" className={styles.socialsSection}>
      <div className="mx-auto px-4 md:px-12 w-full max-w-[1600px]">
        <h2 id="socials-title" className={styles.sectionTitle}>
          Join our community
        </h2>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {SOCIALS.map((item) => (
            <li key={item.id} className="list-none">
              <a
                aria-label={`Link to ${item.label}`}
                className={`${styles.socialLink} ${!item.url ? styles.noClick : ''}`}
                href={item.url}
                rel="noopener noreferrer"
                target={'_blank'}
              >
                <article className={styles.socialCard}>
                  <div className={styles.cardIcon}>{getSocialIcon(item.type)}</div>
                  <div className={styles.cardContent}>
                    <span className={styles.cardCount}>
                      {formatNumber(stats[item.key])}
                    </span>
                    <span className={styles.cardLabel}>{item.label}</span>
                  </div>
                </article>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
