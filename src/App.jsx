import React from "react";
import Pagination from "./Components/Pagination";

const App = () => {
  const data = Array.from({ length: 100 }, (_, i) => i + 1);
  console.log(data);

  return (
    <div className="bg-zinc-900 h-screen text-white p-10">
      <Pagination
        data={data}
        renderRow={function (rowData) {
          return <div>Hello`{rowData}`</div>;
        }}
      />
    </div>
  );
};

export default App;
