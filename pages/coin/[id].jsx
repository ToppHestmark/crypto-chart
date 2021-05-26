import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";
import styles from "./Coin.module.css";

const Coin = ({ coin }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    coin && setLoading(false);
  }, [coin]);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.page}>
          <div className={styles.container}>
            <span className={styles.rank}> {coin.market_cap_rank} </span>
            <img
              src={coin.image.small}
              alt={coin.name}
              className={styles.image}
            />
            <h1 className={styles.name}> {coin.name} </h1>
            <span className={styles.ticker}> {coin.symbol} </span>
            <p className={styles.current}>
              {" "}
              $ {coin.market_data.current_price.usd}{" "}
            </p>

            <h3 className={styles.score_header}> Score </h3>
            <div className={styles.bottom}>
              <span>
                <p> Coingecko </p>
                <b> {coin.coingecko_score.toFixed(2)} % </b>
              </span>
              <span>
                <p>Developer</p>
                <b>{coin.developer_score.toFixed(2)} %</b>
              </span>
              <span>
                <p>Community</p>
                <b> {coin.community_score.toFixed(2)} % </b>{" "}
              </span>
              <span>
                <p>Liquidity</p>
                <b> {coin.liquidity_score.toFixed(0)} % </b>
              </span>
            </div>

            <h3 className={styles.community_header}> Community Data </h3>
            <div className={styles.bottom}>
              <span>
                <p> Twitter followers </p>
                <b>
                  {" "}
                  {new Intl.NumberFormat().format(
                    coin.community_data.twitter_followers
                  )}{" "}
                </b>
              </span>
              <span>
                <p>Reddit subscribers</p>
                <b>
                  {new Intl.NumberFormat().format(
                    coin.community_data.reddit_subscribers
                  )}
                </b>
              </span>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const res = await (
    await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  ).json();

  return {
    props: {
      coin: res,
    },
  };
};
