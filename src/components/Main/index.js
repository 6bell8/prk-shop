/* eslint-disable */

import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>일단 견본</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          로그아웃
        </button>
      </nav>
    </div>
  );
};

export default Main;
