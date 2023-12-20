import styles from "@/app/styles/postCard.module.css";
import Link from "next/link";

function PostCard({ post }) {
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
        <span>{post.categories.location}</span>
        <span>{post.categories.commitment}</span>
        <span>{post.workplaceType}</span>
      </div>
    </Link>
  );
}

export default PostCard;
