import React, { useEffect, useState } from "react";
import CoinGecko from "coingecko-api";
import { Wrapper, Content } from "./Searchresult.style";

import { Line } from "react-chartjs-2";
import noCoin from "../Images/no-coins-for-you-.jpg";

const CoinGeckoClient = new CoinGecko();

const Searchresult = ({ match }) => {
  //description state //
  const [coinName, setCoinName] = useState("");
  //market cap change percent state //
  const [percentChange, setPercentChange] = useState("");
  // coin data state //
  const [coinData, setCoinData] = useState("");
  // coin market chart data state //
  const [marketData, setMarketData] = useState([]);

  const [checkForSearchResult, setCheckForSearchResult] = useState(true);

  const fetchSpecificCoin = async () => {
    const params = {
      order: CoinGecko.ORDER.MARKET_CAP_DESC,
    };

    //current UNIX timestamp count //
    const today = Math.round(new Date().getTime() / 1000);

    // Initial fetch for all coins inputing a descending market cap order and page request //
    const grabAllCoins = await CoinGeckoClient.coins.markets({
      params,
      per_page: [250],
    });

    // Cleaned the data and then formatted the data to look the way I want //
    // added commas to the prices, lowercased the names for easier searches //
    const cleanCoins = grabAllCoins.data;

    const mapNamesToLowerCase = cleanCoins.map((e) => {
      e.name = e.name.toLowerCase();
      e.current_price = e.current_price.toLocaleString();
      e.market_cap = e.market_cap.toLocaleString();
      e.low_24h = e.low_24h.toLocaleString();
      e.high_24h = e.high_24h.toLocaleString();
      return e;
    });

    const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ");
    const searchWithOutSpaces = removeExtraSpace(match.params.searchresult);

    if (
      mapNamesToLowerCase.find(
        (e) => e.name === searchWithOutSpaces.toLowerCase()
      )
    ) {
      // Filtering the data for the specific coin //
      const findCoinData = mapNamesToLowerCase.filter(
        (e) => e.name === searchWithOutSpaces.toLowerCase()
      );

      // Created an array of the coins ID's just in case //
      const cleanCoinData = findCoinData.find((e) => e);
      const coinId = cleanCoinData.id;

      // Fetched the market chart data for the searched coin for a years worth of data //
      const marketChart = await CoinGeckoClient.coins.fetchMarketChartRange(
        coinId.toString(),
        {
          from: today - 86400 * 365,
          to: today,
        }
      );
      // Creating cleaner variables to be able to set my states //
      const marketChartPrice = marketChart.data.prices;

      const coinName =
        cleanCoinData.name.charAt(0).toUpperCase() +
        cleanCoinData.name.slice(1);
      const coinPercentChange = cleanCoinData.market_cap_change_percentage_24h;

      return (
        console.log(cleanCoins),
        // Setting all my states //
        setMarketData(marketChartPrice),
        setCoinData(cleanCoinData),
        //setHour(hourHigh),
        setCoinName(coinName),
        setPercentChange(coinPercentChange),
        setCheckForSearchResult(true)
      );
    } else {
      return setCheckForSearchResult(false);
    }
  };

  // Formatting the object for x and y axis data //
  let changeElementsInMarketData = marketData.map((e) => ({
    x: new Date(e[0]).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }),
    y: e[1],
  }));

  // CHART DATA //
  const chartData = {
    type: "line",
    //labels: marketDataTime,
    datasets: [
      {
        label: match.params.searchresult.toUpperCase(),
        data: changeElementsInMarketData,
        //data: [{x,y}]
        fill: true,
        backgroundColor: "rgb(116, 252, 133)",
        borderColor: "black",
        pointRadius: 0,
      },
    ],
  };

  // CHART OPTIONS //
  const options = {
    maintainAspectRatio: false,
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineweight: 13,
    },
    animation: {
      duration: 2000,
    },
    responsive: true,

    plugins: {
      title: {
        align: "center",
        color: "black",
        display: true,
        text: coinName + " Yearly Chart",
        font: {
          size: 30,
          family: "Arial",
          style: "italic",
        },
      },
      legend: {
        display: false,
        labels: {
          font: {
            size: 20,
            style: "italic",
          },
        },
      },
      tooltips: {
        enabled: false,
      },
    },

    scales: {
      yAxes: {
        beginAtZero: true,

        ticks: {
          autoSkip: true,
          callback: function (value, index) {
            value < 100
              ? (value = value.toFixed(2))
              : (value = value.toLocaleString());

            return "$" + value;
          },
        },
      },

      xAxes: [
        {
          ticks: {
            source: "labels",
            autoSkip: true,
          },
          type: "time",
          distribution: "linear",
        },
      ],
    },
  };

  // Checking if there is search result data //

  //   return (
  //     //console.log(marketDataPrice),

  //     // Created a use effect to call the coins data //
  //     // set a timer for 100 ms and use effect reoccurs when the search result changes //
  //     useEffect(() => {
  //       const timer = setTimeout(() => {
  //         fetchSpecificCoin();
  //       }, 100);
  //       return () => clearTimeout(timer);
  //     }, [match.params.searchresult]),
  //     (
  //       <Wrapper>
  //         <Content>
  //           <div className="coin-descr">
  //             <img src={coinData.image} />
  //             <h1>{coinName}</h1>
  //             <h3
  //               style={{
  //                 color: percentChange < 0 ? "red" : "green",
  //               }}
  //             >
  //               {percentChange}%
  //             </h3>
  //           </div>
  //           <div className="coin-params">
  //             <h2>Price: ${coinData.current_price}</h2>
  //             <h2>24hr High: ${coinData.high_24h}</h2>
  //             <h2>24hr Low: ${coinData.low_24h}</h2>
  //             <h2>Market Cap: ${coinData.market_cap}</h2>
  //           </div>
  //           <div className="chart-graph">
  //             <Line data={dater} options={options} width={400} height={400} />
  //           </div>
  //         </Content>
  //       </Wrapper>
  //     )
  //   );
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSpecificCoin();
    }, 100);
    return () => clearTimeout(timer);
  }, [match.params.searchresult]);

  if (checkForSearchResult === true) {
    return (
      <Wrapper>
        <Content>
          <div className="coin-descr">
            <img alt="coin-img" src={coinData.image} />
            <h1>{coinName}</h1>
            <h3
              style={{
                color: percentChange < 0 ? "red" : "green",
              }}
            >
              {percentChange < 0 ? null : "+"}
              {percentChange}%
            </h3>
          </div>
          <div className="coin-params">
            <h2>Price: {"$" + coinData.current_price}</h2>
            <h2>24hr High: {"$" + coinData.high_24h}</h2>
            <h2>24hr Low: {"$" + coinData.low_24h}</h2>
            <h2>Market Cap: {"$" + coinData.market_cap}</h2>
          </div>
          <div className="chart-graph">
            <Line data={chartData} options={options} width={400} height={400} />
          </div>
        </Content>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="no-search">
          <h1>No search result found</h1>
          <img alt="" src={noCoin}></img>
        </div>
      </Wrapper>
    );
  }
};
export default Searchresult;
