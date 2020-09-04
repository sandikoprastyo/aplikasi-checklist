import React from "react";
import axios from "axios";

const CheckList = () => {
  const [post, setPost] = React.useState("");

  const handleGet = () => {
    axios.get("http://18.141.178.15:8080/checklist").then((res) => {
      console.log(res.data);
    });
  };
  const handlePost = (e) => {
    e.preventDefault();
    axios.post("http://18.141.178.15:8080/checklist").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <h1>CheckList</h1>
      <button onClick={handleGet}>Get all CheckList</button>
      <form onSubmit={handlePost}>
        <input
          value={post}
          onChange={(e) => setPost(e.target.value)}
          type="text"
          placeholder="post checklist..."
        />
        <input type="Submit" value="POST" />
      </form>
    </div>
  );
};

export default CheckList;
