import RadioButton from './forms/RadioButton';
import LocationIcon from './icons/LocationIcon';
import style from './CitySection.module.css';

const CITY_LIST_FILTER = ['All cities', 'Helsinki', 'Turku', 'Oulu', 'Vaasa'];

const CitySection = ({ filter, setFilter }) => {
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

  return <div className={style.citiesRadioContainer}>{citiesRadioButton}</div>;
};

export default CitySection;
