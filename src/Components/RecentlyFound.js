import React from "react";

const RecentlyFound = ({ recently, fetchDecode }) => {
  // пытался отправлять запрос при нажатие на элемент;
  // запрос уходит только с последним элементом списка
  // не смог починить((
  return (
    <div className="recently-found">
      <h2>Recently Found VIN's:</h2>
      {recently.map((el) => (
        <div key={el} onClick={() => fetchDecode(el)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default RecentlyFound;
