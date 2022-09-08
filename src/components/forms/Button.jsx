import style from './Button.module.css';

const EXTRA_CLASS = {
  filled: style.fieldFilled,
  empty: style.fieldEmpty,
  iconFilled: style.iconFilled,
  onlyIcon: style.onlyIcon,
};

const Button = ({
  text,
  icon: Icon,
  onlyIcon,
  color,
  iconWidth = '1rem',
  ...props
}) => {
  const colorClass = EXTRA_CLASS[color || 'empty'];

  return (
    <button className={`${style.button} ${colorClass}`} {...props}>
      {Icon && <Icon width={iconWidth} />}
      {!onlyIcon && text}
    </button>
  );
};

export default Button;
