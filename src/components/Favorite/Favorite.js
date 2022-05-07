import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFilteredCards } from '../../redux/store';
import { useSelector } from 'react-redux';

const Favorite = () => {

  const favCards = useSelector(getFilteredCards);
  console.log('favCards', favCards);

  return (
    <div className={styles.hero}>
      <PageTitle title="Favorite" />
      <p className={styles.subtitle}>Lorem ipsum</p>
    </div>
  );
};

export default Favorite