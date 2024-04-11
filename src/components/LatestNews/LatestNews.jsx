import styles from "./LatestNews.module.css";
import BannersList from "../BannersList/BannersList";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
