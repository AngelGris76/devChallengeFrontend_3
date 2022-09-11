import { useState, useEffect } from 'react';
import SECTION_VALUES from '../constants/sectionValues';
import SearchIcon from './icons/SearchIcon';
import LocationIcon from './icons/LocationIcon';
import CancelIcon from './icons/CancelIcon';
import Button from './forms/Button';
import RadioButton from './forms/RadioButton';
import Counter from './forms/Counter';

import style from './FilterForm.module.css';

const CITY_LIST_FILTER = ['All cities', 'Helsinki', 'Turku', 'Oulu', 'Vaasa'];

const FilterForm = ({ showForm, setShowForm, setCity, setGuests }) => {
  const [visible, setVisible] = useState(false);
  const [section, setSection] = useState(showForm);
  const [filter, setFilter] = useState({ city: null, adults: 0, children: 0 });

  useEffect(() => {
    if (visible) return;
    setVisible(true);
  }, [visible]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setCity(filter.city);
    setGuests(filter.adults + filter.children);
    setShowForm(false);
  };

  const visibleClass = visible ? style.visible : '';

  const citiesRadioButton = CITY_LIST_FILTER.map((city, index) => (
    <RadioButton
      key={index}
      name='cityradiobutton'
      icon={LocationIcon}
      value={city}
      onChange={(ev) => {
        const newCity =
          ev.target.value !== CITY_LIST_FILTER[0] ? ev.target.value : null;

        setFilter({ ...filter, city: newCity });
      }}
    />
  ));

  const buttonLocationText = filter.city
    ? `${filter.city}, Finland`
    : 'Add Location';

  const buttonGuestsText =
    filter.adults || filter.children
      ? `${filter.adults + filter.children} guests`
      : 'Add Guests';

  return (
    <div
      className={`${style.overlay} ${visibleClass}`}
      onClick={() => {
        setShowForm(false);
      }}
    >
      <div
        className={style.formContainer}
        onClick={(ev) => {
          ev.stopPropagation();
        }}
      >
        <span className={style.searchMobileHeader}>
          <span>Edit your search</span>
          <Button
            onlyIcon
            borderLess
            size='sm'
            iconWidth='1.5rem'
            icon={CancelIcon}
            onClick={() => {
              setShowForm(false);
            }}
          />
        </span>
        <form className={style.form} onSubmit={handleSubmit}>
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
          {section === SECTION_VALUES.city && (
            <div className={style.citiesRadioContainer}>
              {citiesRadioButton}
            </div>
          )}
          {section === SECTION_VALUES.guests && (
            <div>
              <Counter
                item='Adults'
                description='Ages 13 or above'
                value={filter.adults}
                setter={(newAdults) => {
                  setFilter({ ...filter, adults: newAdults });
                }}
              />
              <Counter
                item='Children'
                description='Ages 2 - 12'
                value={filter.children}
                setter={(newChildren) => {
                  setFilter({ ...filter, children: newChildren });
                }}
              />
            </div>
          )}
          <div className={style.searchButton}>
            <Button
              kind='submit'
              text='Search'
              icon={SearchIcon}
              color='iconFilled'
              borderLess
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterForm;
