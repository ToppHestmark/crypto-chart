import Head from "next/head";
import { useState } from "react";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

export default function Home({ coins }) {
  const [search, setSearch] = useState("");

  const allCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <Head>
        <title>Crypto Chart</title>
        <meta name="description" content="Crypto currency market cap chart." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinList coins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const coins = await (
    await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
  ).json();

  return {
    props: {
      coins,
    },
  };
};
