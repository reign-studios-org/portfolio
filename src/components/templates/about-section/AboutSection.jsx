import { useEffect, useRef } from 'react';
import { Card } from '../../molecules';
import styles from './AboutSection.module.css';
import { ACHIEVEMENTS } from './achievements.constant';
import { COMPANIES } from './companies.constant';
import { PLEDGES } from './pledges.constant';

export const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const adjustContainer = () => {
      const container = containerRef.current;
      if (!container) return;

      if (window.innerWidth <= 766) {
        console.log('removing');
        container.classList.remove('container');
      } else {
        console.log('adding');
        container.classList.add('container');
      }
    };

    adjustContainer();
    window.addEventListener('resize', adjustContainer);
    return () => window.removeEventListener('resize', adjustContainer);
  }, []);

  return (
    <div id={'about'} className={styles.aboutSection}>
      <div className={'container'}>
        <section className={styles.section1}>
          <h1>About Us</h1>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nostrum culpa obcaecati voluptatibus non blanditiis at! Fuga magnam
            officiis laboriosam quaerat in est illum, iste modi, cumque
            explicabo ut vero similique eaque quae impedit maxime vel
            dignissimos natus quidem odit ipsam enim. Sint odio, aperiam
            temporibus autem nihil voluptatibus libero.
          </p>
          <p>- Markus/Steve (Founder and Co Lead)</p>
        </section>

        <section className={styles.section2}>
          <h1>As seen on</h1>
          <div className={'row row-cols-1 row-cols-md-5 g-4 mt-2'}>
            {COMPANIES.map((company) => {
              return (
                <div
                  key={`about-section-company-card-${company.id}`}
                  className={`${styles.companyCardWrapper} col`}
                >
                  <Card
                    content={() => (
                      <>
                        <img
                          className={styles.companyImage}
                          alt={`${company.name}-logo`}
                          src={company.image}
                        />
                        <h5>{company.name}</h5>
                      </>
                    )}
                  />
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div
            style={{
              backgroundColor: 'var(--reign-studio-text-secondary)',
              height: '2px',
              marginTop: '45px',
              width: '100%',
            }}
          ></div>

          <div className={'row row-cols-1 row-cols-md-3 g-4 mt-2'}>
            {ACHIEVEMENTS.map((achievement) => {
              return (
                <div
                  key={`about-section-achievement-card-${achievement.id}`}
                  className={styles.achievementCardWrapper}
                >
                  <h4>{achievement.name}</h4>
                  <h6>
                    <i>{achievement.description}</i>
                  </h6>
                  <h5>{achievement.where}</h5>
                  <img
                    alt={`${achievement.name}-image`}
                    src={achievement.image}
                  />
                </div>
              );
            })}
          </div>

          {/* Divider */}
          <div
            style={{
              backgroundColor: 'var(--reign-studio-text-secondary)',
              height: '2px',
              marginBottom: '25px',
              marginTop: '45px',
              width: '100%',
            }}
          ></div>

          <div>
            <h1>Our Giving Pledge</h1>
            <div className={'row row-cols-1 row-cols-md-2 g-4 mt-2'}>
              {PLEDGES.map((pledge) => {
                return (
                  <div
                    key={`about-section-pledge-card-${pledge.id}`}
                    className={styles.pledgeCardWrapper}
                  >
                    <img
                      alt={`${pledge.description}-image`}
                      src={pledge.image}
                    />
                    <br />
                    <br />
                    <h5>{pledge.description}</h5>
                    <i style={{ fontSize: '20px' }}>{pledge.subText}</i>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
