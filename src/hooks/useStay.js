import { useEffect, useState } from 'react';
import BUILDINGS_INITIAL_VALUE from '../constants/buildingsInitialValue';
import STAY_FILTER_INITIAL_VALUE from '../constants/stayFilterInitialValue';

const useStay = () => {
  const [buildings, setBuildings] = useState(BUILDINGS_INITIAL_VALUE);
  const [stayFilter, setStayFilter] = useState(STAY_FILTER_INITIAL_VALUE);

  const setCity = (newCity) => {
    setStayFilter((prevValue) => ({ ...prevValue, city: newCity }));
  };

  const setGuests = (newGuests) => {
    setStayFilter((prevValue) => ({ ...prevValue, guests: newGuests }));
  };

  const setPage = (newPage) => {
    setStayFilter((prevValue) => ({ ...prevValue, page: newPage }));
  };

  useEffect(() => {
    fetchingData(setBuildings);
  }, []);

  let filteredBuildings = filterByCity(buildings.stays, stayFilter.city);

  filteredBuildings = filterByGuests(filteredBuildings, stayFilter.guests);

  const totalPages = Math.ceil(filteredBuildings.length / 6) || 1;
  const totalStays = filteredBuildings.length;
  const paginatedStays = paginateStay(filteredBuildings, stayFilter.page);

  return {
    paginatedStays,
    stayFilter,
    setCity,
    setGuests,
    setPage,
    totalPages,
    totalStays,
  };
};

export default useStay;

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
