import style from './Button.module.css';

const EXTRA_CLASS = {
  filled: style.fieldFilled,
  empty: style.fieldEmpty,
  iconFilled: style.iconFilled,
  onlyIcon: style.onlyIcon,
};

const SIZE_CLASS = {
  sm: style.smallButton,
  md: style.mediumButton,
};

const Button = ({
  size,
  borderLess,
  kind = 'button',
  text,
  icon: Icon,
  onlyIcon,
  color,
  iconWidth = '1rem',
  ...props
}) => {
  const colorClass = EXTRA_CLASS[color || 'empty'];
  const sizeClass = size ? SIZE_CLASS[size] : '';
  const extraClass = borderLess ? style.borderLess : '';

  return (
    <button
      className={`${style.button} ${colorClass} ${extraClass} ${sizeClass}`}
      type={kind}
      {...props}
    >
      {Icon && <Icon width={iconWidth} />}
      {!onlyIcon && text}
    </button>
  );
};

export default Button;
