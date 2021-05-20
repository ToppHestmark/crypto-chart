import React from "react";
import Coins from "./Coins";
import styles from "./CoinList.module.css";

const CoinList = ({ coins }) => {
  return (
    <table className={styles.table_container} cellSpacing="0" cellPadding="0">
      <tr className={styles.table_header}>
        <th className={styles.table_rank}>#</th>
        <th className={styles.table_coin}>Coin</th>
        <th className={styles.table_price}>Price</th>
        <th className={styles.table_volume}>24h Volume</th>
        <th className={styles.table_24h}>24h</th>
        <th className={styles.table_marketCap}>Market Cap</th>
      </tr>
      {coins.map((coin) => (
        <tr key={coin.id} className={styles.table_row}>
          <Coins
            rank={coin.market_cap_rank}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
            imagee={coin?.image}
            priceChange={coin.price_change_percentage_24h}
          />
        </tr>
      ))}
    </table>
  );
};

export default CoinList;
