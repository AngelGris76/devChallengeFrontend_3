import { useEffect, useState } from 'react';
import Header from './components/Header';
import StayCard from './components/StayCard';
import StayPagination from './components/StayPagination';
import BUILDINGS_INITIAL_VALUE from './constants/buildingsInitialValue';
import STAY_FILTER_INITIAL_VALUE from './constants/stayFilterInitialValue';

import style from './App.module.css';

const URL = '/assets/stays.json';

const fetchingData = async (setBuildings) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('Server not respond');
    const data = await response.json();
    setBuildings({ stays: data, error: null });
  } catch (err) {
    setBuildings({ error: 'Server not respond' });
  }
};

const App = () => {
  const [buildings, setBuildings] = useState(BUILDINGS_INITIAL_VALUE);
  const [stayFilter, setStayFilter] = useState(STAY_FILTER_INITIAL_VALUE);

  const setCity = (newCity) => {
    const newFilter = { ...stayFilter, city: newCity };
    setStayFilter(newFilter);
  };

  const setGuests = (newGuests) => {
    const newFilter = { ...stayFilter, guests: newGuests };
    setStayFilter(newFilter);
  };

  const setPage = (newPage) => {
    const newFilter = { ...stayFilter, page: newPage };
    setStayFilter(newFilter);
  };

  useEffect(() => {
    fetchingData(setBuildings);
  }, []);

  let filteredBuildings = filterByCity(buildings.stays, stayFilter.city);

  filteredBuildings = filterByGuests(filteredBuildings, stayFilter.guests);

  const totalPages = Math.ceil(filteredBuildings.length / 6);
  const paginatedStays = paginateStay(filteredBuildings, stayFilter.page);

  const renderedStays = paginatedStays.map((stay, index) => (
    <StayCard key={index} {...stay} />
  ));

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <div className={style.title}>
          <h2>{`Stays in Finland`}</h2>
          {buildings.stays && (
            <span>{`${
              filteredBuildings.length > 12 ? '12+' : filteredBuildings.length
            } stays`}</span>
          )}
        </div>
        <div className={style.staysCardContainer}>{renderedStays}</div>
        <StayPagination
          page={stayFilter.page}
          totalPages={totalPages}
          setPage={setPage}
        />
      </main>
    </>
  );
};

export default App;

const filterByCity = (buildings, cityFilter) => {
  if (!buildings) return [];
  if (!cityFilter) return [...buildings];
  return buildings.filter(({ city }) => city === cityFilter);
};

const filterByGuests = (buildings, guestsFilter) => {
  if (!buildings.length) return [...buildings];
  if (!guestsFilter) return [...buildings];
  return buildings.filter(({ maxGuests }) => maxGuests >= guestsFilter);
};

const paginateStay = (buildings, page) => {
  const initialIndex = page * 6 - 6;
  const finalIndex = initialIndex + 6;
  return buildings.slice(initialIndex, finalIndex);
};
