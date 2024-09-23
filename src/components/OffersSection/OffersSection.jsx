import { offers } from "../../data/offers";
import SingleOffer from "../SingleOffer/SingleOffer";
import styles from "./OfferSection.module.css";
import Content from "../Content/Content";

const OffersSection = () => {
  return (
    <section>
      <Content>
        <h2>Our offer:</h2>
        <div className={styles.container}>
          {offers.map((offer) => (
            <SingleOffer item={offer} key={offer.id} />
          ))}
        </div>
      </Content>
    </section>
  );
};

export default OffersSection;
