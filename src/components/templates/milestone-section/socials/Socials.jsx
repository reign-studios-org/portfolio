import { FaDiscord, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SiRoblox } from 'react-icons/si';
import styles from './Socials.module.css';
import { Button } from '../../../atoms';
import { useState } from 'react';

const SOCIALS = [
  {
    id: 1,
    icon: () => <FaXTwitter size={25} />,
    accumulatedText: '700k+ Followers',
    style: {
      color: 'var(--reign-studio-text-primary-white)',
      bgColor: '#1e1e1e',
      hoveredBgColor: '#141414',
    },
  },
  {
    id: 2,
    icon: () => <FaYoutube size={25} />,
    accumulatedText: '2.5M+ Subscribers',
    style: {
      color: 'var(--reign-studio-text-primary-white)',
      bgColor: 'oklch(57.7% 0.245 27.325)',
      hoveredBgColor: 'oklch(50.5% 0.213 27.518)',
    },
  },
  {
    id: 3,
    icon: () => <FaDiscord size={25} />,
    accumulatedText: '4M+ Members',
    style: {
      color: 'var(--reign-studio-text-primary-white)',
      bgColor: 'oklch(51.1% 0.262 276.966)',
      hoveredBgColor: 'oklch(49.6% 0.265 301.924)',
    },
  },
  {
    id: 4,
    icon: () => <SiRoblox size={25} />,
    accumulatedText: '20M+ Members',
    style: {
      color: 'var(--reign-studio-text-primary-white)',
      bgColor: 'oklch(37.3% 0.034 259.733)',
      hoveredBgColor: 'oklch(27.8% 0.033 256.848)',
    },
  },
];

export const Socials = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className={'row'}>
      {SOCIALS.map((social) => {
        const isHovered = hoveredId === social.id;

        return (
          <div
            key={`milestone-social-button-${social.id}`}
            className={`${styles.buttonWrapper} col col-6 col-md-6 col-lg-3 mt-4`}
          >
            <Button
              content={() => (
                <>
                  <span>{social.icon()}</span>
                  <span>{social.accumulatedText}</span>
                </>
              )}
              onMouseEnter={() => setHoveredId(social.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                backgroundColor: isHovered
                  ? social.style.hoveredBgColor
                  : social.style.bgColor,
                color: social.style.color,
                transition: 'background-color 0.3s ease',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
