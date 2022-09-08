import Button from './forms/Button';
import Logo from './icons/Logo';
import Search from './icons/Search';

import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <Logo />
        <div className={style.buttonsContainer}>
          <Button text='location' color='filled' />
          <span className={style.separator}></span>
          <Button text='Add guests' color='empty' />
          <span className={style.separator}></span>
          <Button icon={Search} iconWidth='1.1rem' onlyIcon color='onlyIcon' />
        </div>
      </header>
      <Button
        icon={Search}
        text='Search'
        color='iconFilled'
        iconWidth='1.1rem'
      />
    </>
  );
};

export default Header;
