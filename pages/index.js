import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { getData } from "./api/page";

export default function Home({ isConnected, data }) {
  return (
    <div>
      <Head>
        <title>{data.pageTitle}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center h-screen bg-primary-dark text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Hi there! This page is being built, please visit it later.
          </h1>
          <h1 className="text-2xl font-bold my-4">❤️ you very much ^^</h1>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise;
    const res = await getData();

    return {
      props: { isConnected: true, data: res },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
