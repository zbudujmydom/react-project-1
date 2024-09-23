import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import Content from "../Content/Content";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Content>
        <p>footer...</p>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
