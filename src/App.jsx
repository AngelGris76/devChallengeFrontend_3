import { useState } from 'react';
import useStay from './hooks/useStay';
import Header from './components/Header';
import StayCard from './components/StayCard';
import StayPagination from './components/StayPagination';
import FilterForm from './components/FilterForm';

import style from './App.module.css';

const MAX_STAYS = 12;

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const {
    stayFilter,
    totalPages,
    totalStays,
    paginatedStays,
    setPage,
    setCity,
    setGuests,
  } = useStay();

  const renderedStays = paginatedStays.map((stay, index) => (
    <StayCard key={index} {...stay} />
  ));

  const noScrollClass = showForm ? style.noScroll : '';

  return (
    <div className={noScrollClass}>
      {showForm && (
        <FilterForm
          showForm={showForm}
          setShowForm={setShowForm}
          setCity={setCity}
          setGuests={setGuests}
        />
      )}
      <Header stayFilter={stayFilter} setShowForm={setShowForm} />
      <main className={style.mainContainer}>
        <div className={style.title}>
          <h2>{`Stays in Finland`}</h2>
          {totalStays && (
            <span>{`${
              totalStays > MAX_STAYS ? '12+' : totalStays
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

      <footer className={style.footer}>
        <p>Created by Sebastian Smuraglia</p>
      </footer>
    </div>
  );
};

export default App;
