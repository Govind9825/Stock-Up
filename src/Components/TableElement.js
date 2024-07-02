// TableElement.js
import React from "react";

const TableElement = ({ Name, Symbol, Price, MarketCap, PriceChange }) => {
  // Determine if price change is positive or negative
  const priceChangeClass = parseFloat(PriceChange) >= 0 ? "text-green-500" : "text-red-500";

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap">{Name}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">{Symbol}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">₹{MarketCap}</td>
      <td className="py-3 px-6 text-left whitespace-nowrap">{Price}</td>
      <td className={`py-3 px-6 text-left whitespace-nowrap ${priceChangeClass}`}>{PriceChange}</td>
    </tr>
  );
};

export default TableElement;
