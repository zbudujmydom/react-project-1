import styles from "./Header.module.css";
import Content from "../Content/Content";

const Header = () => {
  return (
    <header
      className={styles.container}
      style={{
        backgroundImage: "url(/images/background.jpg)",
      }}
    >
      <Content>
        <h1>The best company in Poland</h1>
      </Content>
    </header>
  );
};

export default Header;
