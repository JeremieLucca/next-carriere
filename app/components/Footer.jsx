import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <Image
        src="/img/footer/pictures-people-lucca.png"
        alt="Photos People Lucca"
        width={1501}
        height={185}
        className="img-people"
      />

      <div className="container">
        <Link href="/">
          <Image
            src="/img/logo-jobs.svg"
            alt="Logo Lucca Jobs"
            width={172}
            height={56}
            className="logo"
          />
        </Link>

        <div className="ref_container">
          <Image
            src="/img/footer/glassdoor.svg"
            alt="Glassdoor"
            width={184}
            height={68}
          />
          <Image
            src="/img/footer/certified.svg"
            alt="Certification Happy at work"
            width={280}
            height={119}
          />
        </div>
      </div>
    </footer>
  );
};
