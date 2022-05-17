import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import DishesList from "../components/DishesList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Denarios Restaurant in Colombia</title>
        <meta name="description" content="Best restaurant in Risaralda!!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <DishesList />
    </div>
  );
}
