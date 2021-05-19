import React from "react";
import Coins from "./Coins";

const CoinList = ({ coins }) => {
  return (
    <>
      {coins.map((coin) => (
        <Coins
          key={coin.id}
          name={coin.name}
          id={coin.id}
          price={coin.current_price}
          symbol={coin.symbol}
          marketCap={coin.market_cap}
          volume={coin.total_volume}
          imagee={coin?.image}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </>
  );
};

export default CoinList;
