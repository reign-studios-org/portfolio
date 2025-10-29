import clsx from 'clsx';
import styles from './Card.module.css';

export const Card = ({ content, variant }) => {
  const classes = clsx(
    styles.card,
    variant === 'light' ? styles.lightVariant : styles.darkVariant
  );
  return (
    <div className={classes}>
      {typeof content === 'function' ? content() : content}
    </div>
  );
};
