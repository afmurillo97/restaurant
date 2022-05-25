import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import DishesList from "../components/DishesList";
import axios from "axios";

export default function Home({ dishesList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Denarios Restaurant in Colombia</title>
        <meta name="description" content="Best restaurant in Risaralda!!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <DishesList dishesList={dishesList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      dishesList: res.data,
    },
  };
};
