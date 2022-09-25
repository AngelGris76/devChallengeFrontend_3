import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcons';
import Button from './Button';

import style from './Counter.module.css';

const Counter = ({ item, description, value, setter }) => {
  return (
    <div className={style.counterContainer}>
      <p className={style.counterItem}>{item}</p>
      <p className={style.counterDescription}>{description}</p>
      <div className={style.buttons}>
        <Button
          icon={MinusIcon}
          onlyIcon
          size='sm'
          onClick={() => {
            if (!value) return;
            setter(value - 1);
          }}
        />
        <span className={style.valueIndicator}>{value}</span>
        <Button
          icon={PlusIcon}
          onlyIcon
          size='sm'
          onClick={() => setter(value + 1)}
        />
      </div>
    </div>
  );
};

export default Counter;
