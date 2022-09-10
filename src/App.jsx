import useStay from './hooks/useStay';
import Header from './components/Header';
import StayCard from './components/StayCard';
import StayPagination from './components/StayPagination';

import style from './App.module.css';

const App = () => {
  const { stayFilter, totalPages, totalStays, paginatedStays, setPage } =
    useStay();

  const renderedStays = paginatedStays.map((stay, index) => (
    <StayCard key={index} {...stay} />
  ));

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <div className={style.title}>
          <h2>{`Stays in Finland`}</h2>
          {totalStays && (
            <span>{`${totalStays > 12 ? '12+' : totalStays} stays`}</span>
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
