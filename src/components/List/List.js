import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/store';

const List = () => {

  const listData = useSelector(state => getListById(state, 1 )) 
  const columns = useSelector(getAllColumns); 

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>{listData.title}</h1>
      </header>
      <p className={styles.description}>{listData.description}</p>
	  	<section className={styles.columns}>
        {columns.map(column => 
          <Column key={column.id} {...column} />)}
		  </section>
      <ColumnForm />
    </div>
  );
};

export default List;