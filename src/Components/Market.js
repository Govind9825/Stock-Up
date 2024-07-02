// Market.js
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TableElement from "./TableElement";
import Home from "./Home";

const Market = () => {
  const [stockData, setStockData] = useState([]);
  const [page, setPage] = useState(1);
  const maxPages = 4;
  const sockets = useRef({});
  const symbols = [
    "ETHBTC", "LTCBTC", "BNBBTC", "NEOBTC", "QTUMETH", "EOSETH", "SNTETH", "BNTETH", "GASBTC",
    "BNBETH","BTCUSDT", "ETHUSDT", "LRCBTC", "LRCETH", "QTUMBTC", "ZRXBTC", "KNCBTC", "IOTABTC",
    "IOTAETH", "LINKETH", "XVGETH", "MTLBTC", "EOSBTC", "SNTBTC", "ETCETH", "ETCBTC", "ZECBTC",
    "ZECETH", "ASTBTC", "DASHBTC", "DASHETH"
  ];

  useEffect(() => {
    const fetchDataAndSetupWebSockets = () => {
      setStockData(
        Array.from({ length: symbols.length }, (_, index) => ({
          symbol: symbols[index],
          current_price: "Loading...",
          market_cap: "Loading...",
          price_change_percentage_24h: "Loading...",
          market_cap_rank: "Loading..."
        }))
      );

      symbols.forEach((symbol, index) => {
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`);

        ws.onopen = () => {
          console.log(`WebSocket connection established for ${symbol}.`);
        };

        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log(`WebSocket data received for ${symbol}:`, data);

          if (data.e === "24hrTicker") {
            setStockData((prevData) => {
              const newData = [...prevData];
              newData[index] = {
                symbol: data.s,
                current_price: data.c,
                market_cap: data.q,
                price_change_percentage_24h: data.P,
                market_cap_rank: data.r
              };
              return newData;
            });
          }
        };

        ws.onclose = () => {
          console.log(`WebSocket connection closed for ${symbol}.`);
        };

        sockets.current[symbol] = ws;
      });
    };

    // Use setTimeout to delay initial data fetch
    setTimeout(fetchDataAndSetupWebSockets, 1000);

    // Clean up WebSocket connections on component unmount
    return () => {
      Object.values(sockets.current).forEach(ws => ws.close());
    };
  }, []);

  const handleNext = () => {
    if (page < maxPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <Home />
      <div
        id="Market"
        className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8"
      >
        <motion.h1
          className="text-5xl font-bold mb-8 text-white mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Market Overview
        </motion.h1>
        <motion.table
          className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="py-4 px-6 border-b-2 border-gray-800 text-left text-lg">
                Name
              </th>
              <th className="py-4 px-6 border-b-2 border-gray-800 text-left text-lg">
                Symbol
              </th>
              <th className="py-4 px-6 border-b-2 border-gray-800 text-left text-lg">
                Price
              </th>
              <th className="py-4 px-6 border-b-2 border-gray-800 text-left text-lg">
                Market Cap
              </th>
              <th className="py-4 px-6 border-b-2 border-gray-800 text-left text-lg">
                Price Change (%)
              </th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((element, index) => (
              <TableElement
                key={index}
                Name={`Crypto ${index + 1}`}
                Symbol={element.symbol}
                Price={element.current_price}
                MarketCap={element.market_cap}
                PriceChange={element.price_change_percentage_24h}
              />
            ))}
          </tbody>
        </motion.table>
        
      </div>
    </>
  );
};

export default Market;
