import styles from "./Expert.module.css";

const Expert = () => {
  return (
    <div className={styles.container}>
      <img src="/images/expert.jpg" className={styles.photo} alt="expert John" />
      <div>
        <h2>John</h2>
        <p>description</p>
      </div>
    </div>
  );
};

export default Expert;
