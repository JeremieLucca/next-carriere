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
        <Link href="https://jobs.lever.co/lucca/d372a3f5-4a6d-4149-b4bf-6a137a3cec15/apply" className="c-btn">Candidature spontanée</Link>
      </div>
    </section>
  );
};
