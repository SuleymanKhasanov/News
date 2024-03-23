import NewsItem from "../NewsItem/NewsItem";
import styles from "./NewsList.module.css";
function NewsList({ news }) {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default NewsList;
