import styles from "@/app/styles/postCard.module.css";
import Link from "next/link";

function PostCard({ post }) {
  function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
      return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const capitalizedWorkplaceType = capitalizeFirstLetter(post.workplaceType || '');
  const capitalizedCommitment = capitalizeFirstLetter(post.categories.commitment || '');
  const capitalizedLocation = capitalizeFirstLetter(post.categories.location || '');

  return (
    <Link key={post.id} href={`/post/${post.id}`} className={styles.card}>
      <div className={styles.onHover}>
        <div className={`${styles.btn} c-btn`}>
          <p>Voir l&apos;offre</p>
        </div>
      </div>
      <div className={styles.team}>
        <p>{post.categories.team}</p>
      </div>
      <p className={styles.post}>{post.text}</p>
      <div className={styles.more}>
        <span>{capitalizedLocation}</span>
        <span>{capitalizedCommitment}</span>
        <span>{capitalizedWorkplaceType}</span>
      </div>
    </Link>
  );
}


export default PostCard;
