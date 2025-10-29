import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({ content, variant }) => {
  const classes = clsx(
    styles.button,
    variant === 'blue' ? styles.buttonBlue : styles.buttonOrange
  );

  return (
    <button className={classes} type={'button'}>
      {typeof content === 'function' ? content() : content}
    </button>
  );
};
