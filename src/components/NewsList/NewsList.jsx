import withSkeleton from "../../helpers/hooks/hocs/withSkeleton";
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

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
