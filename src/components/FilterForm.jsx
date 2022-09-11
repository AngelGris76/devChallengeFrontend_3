import { useState, useEffect } from 'react';
import SECTION_VALUES from '../constants/sectionValues';
import SearchIcon from './icons/SearchIcon';
import CancelIcon from './icons/CancelIcon';
import Button from './forms/Button';
import SectionButtons from './SectionButtons';
import GuestsSection from './GuestsSection';
import CitySection from './CitySection';

import style from './FilterForm.module.css';

const FilterForm = ({ showForm, setShowForm, setCity, setGuests }) => {
  const [section, setSection] = useState(showForm);
  const [visible, setVisible] = useState(false);
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
          <SectionButtons
            section={section}
            filter={filter}
            setSection={setSection}
          />
          {section === SECTION_VALUES.city && (
            <CitySection filter={filter} setFilter={setFilter} />
          )}
          {section === SECTION_VALUES.guests && (
            <GuestsSection filter={filter} setFilter={setFilter} />
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
