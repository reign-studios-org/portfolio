import { useEffect, useRef, useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { MdQuestionMark } from 'react-icons/md';
import { SiRoblox } from 'react-icons/si';
import clsx from 'clsx';
import { SPECIAL_MEMBERS, MEMBERS } from '@constants';
import styles from './TeamSection.module.css';

const getSocialIcon = (type) => {
  switch (type) {
    case 'instagram': return <AiFillInstagram />;
    case 'roblox': return <SiRoblox />;
    case 'website': return <BsGlobe />;
    case 'twitter': return <FaXTwitter />;
    default: return null;
  }
};

const TeamCard = ({ member }) => (
  <div className={styles.cardShadowWrapper}>
    <article
      className={styles.memberCard}
      style={{ backgroundImage: member.image ? `url(${member.image})` : 'none' }}
    >
      {/* 1. Placeholder Icon if no image exists */}
      {!member.image && (
        <div className={styles.placeholderContainer}>
          <MdQuestionMark className={styles.placeholderIcon} />
        </div>
      )}

      <div className={styles.cardOverlay}>
        <div className={styles.nameContainer}>
          <h3 className={styles.memberName}>{member.name}</h3>
          <span className={styles.memberTitle}>{member.title}</span>
        </div>
        
        <div className={styles.socialsContainer}>
          {member.socials?.map((social, idx) => (
            <a
              key={idx}
              className={styles.socialIcon}
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {getSocialIcon(social.type)}
            </a>
          ))}
        </div>
      </div>
    </article>
  </div>
);

const TeamRow = ({ members, speedClass }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setShouldAnimate(containerRef.current.scrollWidth > window.innerWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [members]);

  return (
    <div className={styles.rowWrapper} ref={containerRef}>
      <div
        className={clsx(
          styles.cardTrack,
          shouldAnimate && speedClass,
          !shouldAnimate && styles.centeredTrack,
        )}
      >
        {(shouldAnimate ? [...members, ...members] : members).map(
          (member, idx) => (
            <TeamCard key={`${member.id}-${idx}`} member={member} />
          ),
        )}
      </div>
    </div>
  );
};

export const TeamSection = () => {
  return (
    <section aria-labelledby="team-title" className={styles.teamSection}>
      <h2 id="team-title" className={styles.sectionTitle}>
        Our Team
      </h2>
      <TeamRow members={SPECIAL_MEMBERS} speedClass={styles.specialTrack} />
      <TeamRow members={MEMBERS} speedClass={styles.memberTrack} />
    </section>
  );
};