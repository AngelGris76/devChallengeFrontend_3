import Button from './forms/Button';
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import SECTION_VALUES from '../constants/sectionValues';

import style from './Header.module.css';

const Header = ({ stayFilter, setShowForm }) => {
  const buttonCityText = stayFilter.city
    ? `${stayFilter.city}, Finland`
    : 'location';

  const buttonGuestsText = stayFilter.guests
    ? `${stayFilter.guests} guests`
    : 'Add guests';
  return (
    <>
      <header className={style.header}>
        <LogoIcon />
        <div className={style.buttonsContainer}>
          <Button
            text={buttonCityText}
            color={stayFilter.city ? 'filled' : 'empty'}
            borderLess
            onClick={() => setShowForm(SECTION_VALUES.city)}
          />
          <span className={style.separator}></span>
          <Button
            text={buttonGuestsText}
            color={stayFilter.guests ? 'filled' : 'empty'}
            borderLess
            onClick={() => setShowForm(SECTION_VALUES.guests)}
          />
          <span className={style.separator}></span>
          <Button
            icon={SearchIcon}
            iconWidth='1.1rem'
            onlyIcon
            color='onlyIcon'
            borderLess
            onClick={() => setShowForm(SECTION_VALUES.city)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
