import React from "react";
import axios from "axios";

const CheckList = () => {
  const handleOnClick = () => {
    axios.get("http://18.141.178.15:8080/checklist").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1>CheckList</h1>
      <button onClick={handleOnClick}>Get all CheckList</button>
    </div>
  );
};

export default CheckList;
