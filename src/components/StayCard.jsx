import StarIcon from './icons/StarIcon';
import style from './StayCard.module.css';

const StayCard = ({ superHost, title, type, beds, rating, photo }) => {
  return (
    <article className={style.stayCard}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.stayDetail}>
        {superHost && <span className={style.superHost}>super host</span>}
        <span>{type}.</span>
        {superHost && beds && <span>beds {beds}</span>}
        <span className={style.rating}>
          <span className={style.ratingIcon}>
            <StarIcon width='1.5rem' />
          </span>
          {rating}
        </span>
      </p>
      <div className={style.stayCardPhotoContainer}>
        <img src={photo} alt='' className={style.stayCardPhoto} />
      </div>
    </article>
  );
};

export default StayCard;
