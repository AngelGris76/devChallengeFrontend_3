import style from './RadioButton.module.css';

const RadioButton = ({ icon: Icon, value, ...props }) => {
  return (
    <label className={style.option}>
      {Icon && <Icon width='1rem' />}
      {value}, Finland
      <input type='radio' value={value} {...props} className={style.input} />
    </label>
  );
};

export default RadioButton;
