import React from "react";

const DecodeItem = ({ item }) => {
  return (
    <div className="list-item">
      <b>{item.Variable}</b>: <span>{item.Value}</span>
    </div>
  );
};

export default DecodeItem;
