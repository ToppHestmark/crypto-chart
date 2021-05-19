import styles from "./Coins.module.css";
import Link from "next/link";

const Coins = ({
  name,
  price,
  symbol,
  marketCap,
  volume,
  imagee,
  priceChange,
  id,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div key={id} className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={imagee} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_header}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}> ${price} </p>
              <p className={styles.coin_volume}> ${volume.toLocaleString()} </p>

              {priceChange < 0 ? (
                <p className={styles.coin_percent_red}>
                  {" "}
                  {priceChange.toFixed(2)}%{" "}
                </p>
              ) : (
                <p className={styles.coin_percent_green}>
                  {" "}
                  {priceChange.toFixed(2)}%{" "}
                </p>
              )}

              <p className={styles.coin_marketcap}>
                Market Cap: ${marketCap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
