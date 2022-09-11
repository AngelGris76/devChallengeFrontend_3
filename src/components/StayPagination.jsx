import Button from './forms/Button';
import MinusIcon from './icons/MinusIcon';
import PlusIcon from './icons/PlusIcons';

import style from './StayPagination.module.css';

const StayPagination = ({ page, totalPages, setPage }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  return (
    <div className={style.paginationContainer}>
      <Button
        size='sm'
        borderLess
        onlyIcon
        color='iconFilled'
        icon={MinusIcon}
        disabled={isFirstPage}
        onClick={() => {
          setPage(page - 1);
        }}
      />
      <p>
        page {page} of {totalPages}
      </p>
      <Button
        size='sm'
        borderLess
        onlyIcon
        color='iconFilled'
        icon={PlusIcon}
        disabled={isLastPage}
        onClick={() => {
          setPage(page + 1);
        }}
      />
    </div>
  );
};

export default StayPagination;
