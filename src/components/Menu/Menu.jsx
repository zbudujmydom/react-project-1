import Content from "../Content/Content";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Content>
        <div className={styles.companyName}>The best company</div>
      </Content>
    </nav>
  );
};

export default Menu;
