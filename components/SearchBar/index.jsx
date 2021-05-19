import styles from "./Search.module.css";

const SearchBar = ({ ...restProps }) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...restProps} />
    </div>
  );
};

export default SearchBar;
