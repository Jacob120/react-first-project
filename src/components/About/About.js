import styles from './About.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle title="About" />
      <p className={styles.subtitle}>Lorem ipsum</p>
    </div>
  );
};

export default About