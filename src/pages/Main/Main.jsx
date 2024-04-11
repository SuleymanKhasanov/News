import { getNews } from "../../api/apiNews";
import { PAGE_SIZE } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import { useDebounce } from "./../../helpers/hooks/useDebiunce";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsFilters from "../../components/NewsFilters/NewsFilters";
import styles from "./Main.module.css";

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <>
      <NewsFilters changeFilters={changeFilters} filters={filters} />

      <main className={styles.main}>
        <LatestNews isLoading={isLoading} banners={data && data.news} />

        <NewsByFilters
          news={data?.news}
          isLoading={isLoading}
          filters={filters}
          changeFilters={changeFilters}
        />
      </main>
    </>
  );
};

export default Main;
