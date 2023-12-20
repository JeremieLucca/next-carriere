import styles from "@/app/styles/loadingCard.module.css";

export const LoadingCard = ({ number }) => {
  const listCard = [];

  for (let i = 0; i < number; i++) {
    listCard.push(
      <div key={i} className={styles.loading}>
        <div className={styles.first}></div>
        <div className={styles.second}></div>
        <div className={styles.third}></div>
      </div>
    );
  }

  return (
    <>
      {listCard}
    </>
  );
};
