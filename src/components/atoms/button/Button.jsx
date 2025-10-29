import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({ content, style, variant, ...rest }) => {
  const classes = clsx(
    styles.button,
    variant === 'blue' ? styles.buttonBlue : styles.buttonOrange
  );

  return (
    <button className={classes} style={style} type={'button'} {...rest}>
      {typeof content === 'function' ? content() : content}
    </button>
  );
};
