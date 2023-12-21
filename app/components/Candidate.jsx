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
        <p>Si vous êtes passionné(e) par votre métier et que vous souhaitez évoluer dans un environnement stimulant. Nous sommes ouverts à toutes les candidatures et nous étudierons avec attention chaque profil.</p>
        <Link href="https://jobs.lever.co/lucca/d372a3f5-4a6d-4149-b4bf-6a137a3cec15" className="c-btn" target="_blank">Candidature spontanée</Link>
      </div>
    </section>
  );
};
