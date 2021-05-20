import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
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
  rank,
}) => {
  const marketVolume = (n) =>
    volume > 1000000000
      ? (n / 1000000000).toFixed(2) + " B"
      : Math.floor(n / 1000000) + " M";

  return (
    <>
      <td className={styles.coin_rank}>{rank}</td>

      <td>
        <Link href="/coin/[id]" as={`/coin/${id}`}>
          <a className={styles.coin_wrapper}>
            <span>
              <img src={imagee} alt={name} className={styles.coin_img} />
            </span>
            <span>
              <div className={styles.coin_header}>{name}</div>
              <div className={styles.coin_symbol}>{symbol}</div>
            </span>
          </a>
        </Link>
      </td>

      <td className={styles.coin_price}>
        {" "}
        <small className={styles.coin_small}>$</small>
        {price}
      </td>

      <td className={styles.coin_volume}>
        <small className={styles.coin_small}>$</small>
        {marketVolume(volume)}
      </td>

      <td className={styles.coin_24h}>
        {priceChange < 0 ? (
          <p className={styles.coin_percent_red}>
            {" "}
            {Math.abs(priceChange).toFixed(2)}%{" "}
            <GoTriangleDown className={styles.triangle} />
          </p>
        ) : (
          <p className={styles.coin_percent_green}>
            {" "}
            {priceChange.toFixed(2)}%{" "}
            <GoTriangleUp className={styles.triangle} />
          </p>
        )}
      </td>

      <td className={styles.coin_marketcap}>
        <small className={styles.coin_small}>$</small>
        {marketVolume(marketCap)}
      </td>
    </>
  );
};

export default Coins;
