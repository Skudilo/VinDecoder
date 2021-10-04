import { useState } from "react";
import { useFetching } from "../hooks/useFetching";
import VinService from "../API/VinService";
import DecodeList from "../Components/DecodeList";
import Intro from "./Intro";
import RecentlyFound from "../Components/RecentlyFound";
import Search from "./Search";
import { Spin } from "antd";

const Home = () => {
  const [vinCode, setVinCode] = useState("JN1AZ4EH7DM430111");
  const [decodeRes, setDecodeRes] = useState([]);
  const [recently, setRecently] = useState([]);

  const [fetchDecode, isDecodeLoading, decodeError] = useFetching(async () => {
    const response = await VinService.getDecode(vinCode);
    const filterRes = response.data.Results.filter(
      (el) =>
        el.Value &&
        el.Variable &&
        el.Value !== "Not Applicable" &&
        el.Variable.indexOf("Error") === -1
    );
    setDecodeRes(filterRes);
  });

  const uniqueResults = (arr) => {
    let result = [];
    arr.forEach((el) => {
      if (!result.includes(el)) {
        result.push(el);
      }
    });
    return result;
  };

  if (decodeError) {
    return <h2 style={{ textAlign: "center" }}>{decodeError}</h2>;
  }

  return (
    <div className="home">
      <div className="home-wrap">
        <Intro />
        <Search
          vinCode={vinCode}
          setVinCode={setVinCode}
          fetchDecode={fetchDecode}
          isLoading={isDecodeLoading}
          setRecently={setRecently}
        />
      </div>

      {isDecodeLoading ? (
        <Spin />
      ) : (
        <div className="content">
          {recently.length ? (
            <RecentlyFound
              recently={uniqueResults(recently)}
              fetchDecode={fetchDecode}
            />
          ) : null}
          {decodeRes.length ? <DecodeList decodeRes={decodeRes} /> : null}
        </div>
      )}
    </div>
  );
};

export default Home;
