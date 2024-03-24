import styles from "./Search.module.css";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search by keywords"
      />
    </div>
  );
};

export default Search;
