import styles from "./SingleOffer.module.css";

const SingleOffer = (props) => {
  return (
    <div className={styles.box}>
      <p>{props.item.title}</p>
      {props.item.isNew ? <p>Nowość</p> : null}
      {props.item.isNew ? <div className={styles.dot}></div> : null}
    </div>
  );
};

export default SingleOffer;
