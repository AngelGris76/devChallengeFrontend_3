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
  subText,
  icon: Icon,
  onlyIcon,
  color,
  iconWidth = '1rem',
  ...props
}) => {
  const colorClass = EXTRA_CLASS[color || 'empty'];
  const sizeClass = size ? SIZE_CLASS[size] : '';
  const extraClass = borderLess ? style.borderLess : '';
  const flexDirection = subText ? style.column : '';
  const iconText = Icon ? style.iconText : '';

  return (
    <button
      className={`${style.button} ${colorClass} ${extraClass} ${sizeClass} ${flexDirection}`}
      type={kind}
      {...props}
    >
      {Icon && <Icon width={iconWidth} />}
      {!onlyIcon && subText && (
        <span className={style.description}>{subText}</span>
      )}
      {!onlyIcon && text && (
        <span className={`${style.subDescription} ${iconText}`}>{text}</span>
      )}
    </button>
  );
};

export default Button;
