import styles from "@/app/post/page.module.css";
import getOnePost from "@/libs/getOnePost";
import Image from "next/image";
import Link from "next/link";


export default async function SinglePost({ params: { id } }) {
  const job = await getOnePost(id);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <Image
              src="/img/logo-jobs.svg"
              alt="Logo Lucca Jobs"
              width={172}
              height={56}
              className={styles.logo}
            />
          </Link>
          <Link href="/" className={styles.linkHome} prefetch={false}>
            Back to home
          </Link>
        </div>
      </header>

      <main>
        <article className={styles.intro}>
          <div className={styles.title}>
            <h1>{job?.text}</h1>
            <Link href={job.applyUrl} className="c-btn" target="_blank">
              Postuler
            </Link>
          </div>
          <div className={styles.tags}>
            <span>{job.categories.commitment}</span>
            <span>{job.categories.department}</span>
            <span>{job.categories.location}</span>
            <span>{job.categories.team}</span>
          </div>
        </article>

        <article className={styles.infos}>
          <section
            dangerouslySetInnerHTML={{ __html: job.description }}
            className={styles.description}
          />
          <section
            dangerouslySetInnerHTML={{ __html: job.additional }}
            className={styles.additional}
          />
          <div className={styles.lastCTA}>
            <Link href={job.applyUrl} className="c-btn" target="_blank">
              Postuler
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
