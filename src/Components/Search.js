import React, { useEffect, useState } from "react";
import Input from "antd/lib/input";
import { Button } from "antd";

const Search = (props) => {
  const { vinCode, setVinCode, fetchDecode, isLoading, setRecently } = props;
  const [searchDirty, setSearchDirty] = useState(false);
  const [searchError, setSearchError] = useState("Please Enter VIN Code");
  const [searchValid, setSearchValid] = useState(false);

  useEffect(() => {
    searchError ? setSearchValid(false) : setSearchValid(true);
  }, [searchError]);

  const searchHandler = (e) => {
    setVinCode(e.target.value);
    const re = /[a-zA-Z0-9]{17}/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setSearchError("Please enter valid VIN Code");
    } else {
      setSearchError("");
    }
  };

  const blurHandler = () => {
    setSearchDirty(true);
  };

  const onSubmit = (vin) => {
    fetchDecode(vinCode);
    setRecently((prevState) => [...prevState, vin]);
  };

  return (
    <div className="search">
      <div className="search-wrap">
        <Input
          size="large"
          type="text"
          className="ant-input"
          placeholder="Enter VIN number"
          disabled={isLoading}
          onBlur={() => blurHandler()}
          value={vinCode}
          onChange={(e) => searchHandler(e)}
        />
        <Button
          type="primary"
          size="large"
          className="ant-btn"
          disabled={isLoading || !searchValid}
          onClick={() => onSubmit(vinCode)}
        >
          Decode
        </Button>
      </div>
      {searchError && searchDirty && (
        <div className="input-error" style={{ color: "red" }}>
          {searchError}
        </div>
      )}
    </div>
  );
};

export default Search;
