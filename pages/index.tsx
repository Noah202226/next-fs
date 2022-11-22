import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Noahs Assets | HOME</title>
      </Head>
      <div>
        <h1 className={styles.title}>Next JS + Typescript</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea
          placeat, eaque cumque debitis expedita dignissimos cupiditate nobis
          corporis ducimus!
        </p>

        <Link href="./assets" className={styles.btn}>
          Assets
        </Link>
      </div>
    </>
  );
}
