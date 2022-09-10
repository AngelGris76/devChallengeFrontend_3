import Button from './forms/Button';
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';

import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <LogoIcon />
        <div className={style.buttonsContainer}>
          <Button text='location' color='filled' borderLess />
          <span className={style.separator}></span>
          <Button text='Add guests' color='empty' borderLess />
          <span className={style.separator}></span>
          <Button
            icon={SearchIcon}
            iconWidth='1.1rem'
            onlyIcon
            color='onlyIcon'
            borderLess
          />
        </div>
      </header>
    </>
  );
};

export default Header;
