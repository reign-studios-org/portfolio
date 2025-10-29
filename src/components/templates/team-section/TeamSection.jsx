import { MEMBERS } from './members.constant';
import styles from './TeamSection.module.css';

export const TeamSection = () => {
  return (
    <div id={'team'} className={styles.teamSection}>
      <div className={'container'}>
        <h1>Our Team</h1>
        <div className={'row row-cols-3 row-cols-md-6'}>
          {MEMBERS.map((member) => {
            return (
              <div key={`team-section-item-${member.name}-${member.id}`} className={`${styles.memberCard} col`}>
                <img alt={`member-${member.name}-${member.id}`} src={member.image} />
                <h5>{member.name}</h5>
                <h6>{member.position}</h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};