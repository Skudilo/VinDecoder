import React, { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import VinService from "../API/VinService";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";

const VariableList = () => {
  const [variables, setVariables] = useState([]);
  const router = useHistory();

  const [fetchVariable, isLoading, Error] = useFetching(async () => {
    const response = await VinService.getVariableList();
    setVariables(response.data.Results);
  });

  useEffect(() => {
    fetchVariable();
  }, []);

  if (Error) {
    return <h2 style={{ textAlign: "center" }}>{Error}</h2>;
  }

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div className="variable-list">
      <h2>Value Description</h2>
      {variables.map((item) => (
        <div
          key={item.ID}
          className="list-item"
          onClick={() => router.push(`/variables/${item.Name}`)}
        >
          {item.Name}
        </div>
      ))}
    </div>
  );
};

export default VariableList;
