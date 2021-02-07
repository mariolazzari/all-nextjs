import Head from "next/head";
import styles from "../shared/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>All about NextJS</title>
      </Head>

      <main className={styles.main}>
        <header className={styles.container}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </header>
      </main>
    </>
  );
}
