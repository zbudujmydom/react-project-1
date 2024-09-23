import styles from "./Content.module.css";

const Content = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Content;
