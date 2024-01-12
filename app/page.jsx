"use client";

import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useFetchPosts } from "@/libs/getAllPosts";

import PostCard from "./components/PostCard";
import { LoadingCard } from "./components/LoadingCard";
import { Candidate } from "./components/Candidate";

export default function Home() {

  const { data: jobs, error, isLoading } = useFetchPosts();

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState({
    text: "",
    team: "",
    location: "",
    department: "",
  });

  useEffect(() => {
    if (jobs) {
      setFilteredJobs(jobs);
    }
  }, [jobs]);

  const filterJobs = () => {
    if (jobs) {
      const filtered = jobs.filter((job) => {
        const { categories, text } = job;
        const { team, location, department } = categories;

        // Stocker les valeurs dans des tableaux
        const teamValues = Array.isArray(team) ? team : [team];
        const locationValues = Array.isArray(location) ? location : [location];
        const departmentValues = Array.isArray(department)
          ? department
          : [department];

        return (
          (filters.text === "" ||
            text.toLowerCase().includes(filters.text.toLowerCase())) &&
          (filters.team === "" ||
            teamValues.some((value) => value.includes(filters.team))) &&
          (filters.location === "" ||
            locationValues.includes(filters.location)) &&
          (filters.department === "" ||
            departmentValues.includes(filters.department))
        );
      });

      setFilteredJobs(filtered);
    }
  };

  useEffect(() => {
    filterJobs();
  }, [filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Extraire les valeurs uniques pour chaque filtre depuis les données de l'API
  const uniqueTeams = Array.from(
    new Set(jobs?.map((job) => job.categories.team).flat())
  );
  const uniqueLocations = Array.from(
    new Set(jobs?.map((job) => job.categories.location).flat())
  );
  const uniqueDepartments = Array.from(
    new Set(jobs?.map((job) => job.categories.department).flat())
  );

  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.img}>
          <Image
            src="/img/home/illu-header-coffee-plant.svg"
            alt="Plant and coffee"
            width={381}
            height={376}
            className={styles.left}
          />
        </div>

        <div className={styles.txt}>
          <Link href="/">
            <Image
              src="/img/logo-jobs.svg"
              alt="Logo Lucca Jobs"
              width={172}
              height={56}
              className={styles.logo}
            />
          </Link>
          <input
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Rechercher un poste"
          />
          <div className={styles.links}>
            <Link href="https://jobs.luccasoftware.com/">
              <b>Retour sur la page carrière</b>
            </Link>
            <span>|</span>
            <Link
              href="https://jobs.lever.co/lucca/d372a3f5-4a6d-4149-b4bf-6a137a3cec15"
              target="_blank"
            >
              <b>Candidature spontanée</b>
            </Link>
          </div>
        </div>

        <div className={styles.img}>
          <Image
            src="/img/home/illu-header-tablet.svg"
            alt="Tablet"
            width={378}
            height={398}
            className={styles.right}
          />
        </div>
      </header>

      <main className={`${styles.home} container`}>
        {/* FILTERS */}
        <article className={styles.filters}>
          <p>Filtrer par&nbsp;:</p>

          <div className={styles.filter}>
            <select
              name="department"
              value={filters.department}
              onChange={handleChange}
            >
              <option value="">Département</option>
              {uniqueDepartments.map((department) =>
                department ? (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ) : null
              )}
            </select>
          </div>

          <div className={styles.filter}>
            <select name="team" value={filters.team} onChange={handleChange}>
              <option value="">Équipe</option>
              {uniqueTeams.map((team) =>
                team ? (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ) : null
              )}
            </select>
          </div>

          <div className={styles.filter}>
            <select
              name="location"
              // value=""
              value={filters.location}
              onChange={handleChange}
            >
              <option value="">Localisation</option>
              {uniqueLocations.map((location) =>
                location ? (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ) : null
              )}
            </select>
          </div>
        </article>

        {/* LIST JOBS */}
        <article className={styles.posts}>
          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                {/* <Image
                  src="/img/ico/ico-target.svg"
                  alt="icon target"
                  width={42}
                  height={42}
                /> */}
                <h2>Sales</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Sales") {
                    return <PostCard key={post.id} post={post} />;
                  }
                  return null;
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>R&D</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "R&D") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>Marketing</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Marketing") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>Channel</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Channel") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>Direction Finance</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Direction Finance") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>Customer Success</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Customer Success") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>Business Technology</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Business Technology") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>Direction Technique</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Direction Technique") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>

          <section>
            <div className={styles.intro}>
              <div className={styles.title}>
                <h2>Direction RH</h2>
              </div>
            </div>
            <div className="grid" data-columns="3">
              {jobs ? (
                filteredJobs.map((post) => {
                  if (post.categories.department === "Direction RH") {
                    return <PostCard key={post.id} post={post} />;
                  }
                })
              ) : (
                <LoadingCard number="3" />
              )}
            </div>
          </section>
        </article>

        <Candidate />
      </main>
    </>
  );
}
