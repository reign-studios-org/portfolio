import styles from './Statistics.module.css';
import { Card } from '../../../molecules';

const STATISTICS = [
  { id: 1, accumulatedText: '$12 Million+', category: 'Company Evaluation' },
  { id: 2, accumulatedText: '5.2 Billion+', category: 'Game Visits' },
  { id: 3, accumulatedText: '28 Million+', category: 'Community Members' },
];

export const Statistics = () => {
  return (
    <div className={'row'}>
      {STATISTICS.map((stat) => {
        return (
          <div
            key={`milestone-statistic-card-${stat.id}`}
            className={`${styles.cardWrapper} col col-12 col-md-12 col-lg-4 mt-4`}
          >
            <Card
              content={() => (
                <>
                  <div>{stat.accumulatedText}</div>
                  <div>{stat.category}</div>
                </>
              )}
            />
          </div>
        );
      })}
    </div>
  );
};
