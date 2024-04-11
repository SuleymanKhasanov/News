import styles from "./Skeleton.module.css";

const Skeleton = ({ count, type, direction = "column" }) => {
  return (
    <>
      {count > 1 ? (
        <ul className={direction === "column" ? styles.columnList : styles.rowList}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={type === "banner" ? styles.banner : styles.item} />
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item} />
      )}
    </>
  );
};

export default Skeleton;
