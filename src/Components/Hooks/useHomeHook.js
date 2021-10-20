import { useState, useEffect } from "react";
import CoinGecko from "coingecko-api";

const CoinGeckoClient = new CoinGecko();

export const useHomeHook = () => {
  const [coinNames, setCoinNames] = useState([]);
  const [price, setPrice] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [bool, setBool] = useState(false);

  const fetchCoins = async () => {
    const params = {
      order: CoinGecko.ORDER.MARKET_CAP_DESC,
    };
    const grabAllCoins = await CoinGeckoClient.coins.markets({
      params,
      per_page: [250],
    });
    const cleanCoins = grabAllCoins.data;
    const grabCoinNames = cleanCoins.map((e) => e.name);
    const grabCoinPrices = cleanCoins.map((e) => e.current_price);

    return (
      setCoinNames(grabCoinNames),
      setPrice(grabCoinPrices),
      //console.log(cleanCoins),
      setData(cleanCoins)
    );
  };

  return (
    useEffect(() => {
      if (bool === false) {
        fetchCoins();
        setBool(true);
      }
    }, [bool]),
    {
      coinNames,
      price,
      data,
      setPrice,
      setCoinNames,
      setData,
      search,
      setSearch,
    }
  );
};
