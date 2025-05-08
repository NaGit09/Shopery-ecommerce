import React from "react";

const OrderHistory = () => {
  return (
    <div className="flex items-center justify-between text-gray-800">
      <span>#738</span>
      <span>8 Sep, 2020</span>
      <span>$135.00 (5 Products)</span>
      <span>Processing</span>
      <a className="text-Primary" href="#">View Details</a>
    </div>
  );
};

export default OrderHistory;
