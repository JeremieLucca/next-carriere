import styles from "@/app/styles/candidate.module.css";
import Link from "next/link";
import Image from "next/image";

export const Candidate = () => {
  return (
    <section className={styles.candidateNow}>
      <div className={styles.img}>
      <Image
          src="/img/home/illu-card-candidate.svg"
          alt="Candidature spontanée"
          width={290}
          height={372}
        />
      </div>
      <div className={styles.txt}>
        <h2>Candidature spontanée</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </p>
        <Link href="/" className="c-btn">Candidature spontanée</Link>
      </div>
    </section>
  );
};
