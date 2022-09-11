import Counter from './forms/Counter';

const GuestsSection = ({ filter, setFilter }) => {
  return (
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
  );
};

export default GuestsSection;
