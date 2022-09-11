import SECTION_VALUES from '../constants/sectionValues';
import Button from './forms/Button';

import style from './SectionButtons.module.css';

const SectionButtons = ({ filter, section, setSection }) => {
  const buttonLocationText = filter.city
    ? `${filter.city}, Finland`
    : 'Add Location';

  const buttonGuestsText =
    filter.adults || filter.children
      ? `${filter.adults + filter.children} guests`
      : 'Add Guests';

  return (
    <div className={style.sectionButtonContainer}>
      <Button
        size='sm'
        subText='location'
        text={buttonLocationText}
        color={filter.city ? 'filled' : 'empty'}
        aria-pressed={section === SECTION_VALUES.city}
        onClick={() => {
          setSection(SECTION_VALUES.city);
        }}
      />
      <Button
        size='sm'
        subText='guests'
        text={buttonGuestsText}
        color={filter.adults || filter.children ? 'filled' : 'empty'}
        aria-pressed={section === SECTION_VALUES.guests}
        onClick={() => {
          setSection(SECTION_VALUES.guests);
        }}
      />
      <span className={style.searchButtonDesktop}></span>
    </div>
  );
};

export default SectionButtons;
