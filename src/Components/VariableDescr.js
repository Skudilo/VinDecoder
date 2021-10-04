import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import VinService from "../API/VinService";
import { Spin } from "antd";

const VariableDescr = () => {
  const params = useParams();
  const [variable, setVariable] = useState([]);

  const [fetchVariable, isLoading, Error] = useFetching(async () => {
    const response = await VinService.getVariableByName(params.name);
    setVariable(response.data.Results);
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
    <div className="variable-descr">
      {variable.length ? (
        <>
          <h2>{params.name}</h2>
          {variable.map((el, i) => (
            <div key={i} className="list-item">
              {el.Name}
            </div>
          ))}
        </>
      ) : (
        <h2>NO Information</h2>
      )}
    </div>
  );
};

export default VariableDescr;
