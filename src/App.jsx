import React from "react";
import Pagination from "./Components/Pagination";


const App = () => {
  const data = Array.from({ length: 100 }, (_, i) => i + 1);
  console.log(data);

  return <div className="">
    <Pagination data = {data} />
  </div>;
};

export default App;
