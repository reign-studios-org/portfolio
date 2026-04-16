import { useEffect, useRef, useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { MdQuestionMark } from 'react-icons/md';
import { SiRoblox } from 'react-icons/si';
import clsx from 'clsx';
import { DEVELOPERS, REIGN_TEAM_MEMBERS, STAFFS } from '@constants';
import styles from './TeamSection.module.css';

/* =========================
   ICON MAPPING
========================= */
const getSocialIcon = (type) => {
  switch (type) {
    case 'instagram':
      return <AiFillInstagram />;
    case 'roblox':
      return <SiRoblox />;
    case 'website':
      return <BsGlobe />;
    case 'x':
      return <FaXTwitter />;
    case 'discord':
      return <FaDiscord />;
    default:
      return null;
  }
};

/* =========================
   TOAST NOTIFIER COMPONENT
========================= */
const CopyToast = ({ visible, message }) => {
  return (
    <div
      className={clsx(styles.toast, visible && styles.toastShow)}
    >
      {message}
    </div>
  );
};

/* =========================
   TEAM CARD
========================= */
const TeamCard = ({ member, onCopy }) => (
  <div className={styles.cardShadowWrapper}>
    <article
      className={styles.memberCard}
      style={{
        backgroundImage: member.image ? `url(${member.image})` : 'none',
      }}
    >
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
              href={social.type === 'discord' ? undefined : social.link}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => {
                if (social.type === 'discord') {
                  e.preventDefault();
                  onCopy(social.link);
                }
              }}
            >
              {getSocialIcon(social.type)}
            </a>
          ))}
        </div>
      </div>
    </article>
  </div>
);

/* =========================
   TEAM ROW
========================= */
const TeamRow = ({ members, speedClass, title, onCopyHandler }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  // 1. Rename ref for clarity and we will move it to the track
  const trackRef = useRef(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (trackRef.current) {
        // 2. The core of the fix is here
        // Get the width of the content as it's currently rendered
        const currentContentWidth = trackRef.current.scrollWidth;

        // If animating, the content is duplicated. We need the original width.
        // So, we divide by 2 if it's currently animating.
        const singleSetWidth = shouldAnimate
          ? currentContentWidth / 2
          : currentContentWidth;

        // Now, compare the single set's width to the container's width (the viewport in this case)
        setShouldAnimate(singleSetWidth > window.innerWidth);
      }
    };

    // Run the check initially and on any resize
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => window.removeEventListener('resize', checkOverflow);
    // 3. Add `shouldAnimate` to the dependency array
    // This ensures the event listener is updated with the latest state value
  }, [members, shouldAnimate]);

  return (
    <>
      <h2 id="team-title" className={styles.sectionTitle}>
        {title}
      </h2>

      {/* The outer wrapper no longer needs a ref */}
      <div className={styles.rowWrapper}>
        <div
          // Attach the ref to the element whose content width changes
          ref={trackRef}
          className={clsx(
            styles.cardTrack,
            shouldAnimate && speedClass,
            !shouldAnimate && styles.centeredTrack
          )}
        >
          {/* This duplication logic is correct and can stay as is */}
          {(shouldAnimate ? [...members, ...members] : members).map(
            (member, idx) => (
              <TeamCard
                key={`${member.id}-${idx}`}
                member={member}
                onCopy={onCopyHandler}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

/* =========================
   MAIN SECTION
========================= */
export const TeamSection = () => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
  });

  /* COPY HANDLER */
  const onCopyHandler = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      setToast({
        visible: true,
        message: 'Copied to clipboard!',
      });

      setTimeout(() => {
        setToast({ visible: false, message: '' });
      }, 1500);
    } catch (err) {
      console.error('Copy failed:', err);

      setToast({
        visible: true,
        message: 'Failed to copy',
      });

      setTimeout(() => {
        setToast({ visible: false, message: '' });
      }, 1500);
    }
  };

  return (
    <section aria-labelledby="team-title" className={styles.teamSection}>
      {/* TOAST */}
      <CopyToast
        visible={toast.visible}
        message={toast.message}
      />

      <TeamRow
        title={'Reign Team'}
        members={REIGN_TEAM_MEMBERS}
        speedClass={styles.reignTeamTrack}
        onCopyHandler={onCopyHandler}
      />

      <TeamRow
        title={'Developers'}
        members={DEVELOPERS}
        speedClass={styles.developerTrack}
        onCopyHandler={onCopyHandler}
      />

      <TeamRow
        title={'Staffs'}
        members={STAFFS}
        speedClass={styles.staffTrack}
        onCopyHandler={onCopyHandler}
      />
    </section>
  );
};