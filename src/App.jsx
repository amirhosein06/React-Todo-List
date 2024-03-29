import { useState } from "react";
import OptionBar from "./component/optionbar";
import ItemShow from "./component/itemshow";
import Context from "./component/context/context";

function App() {
  const [datalist, setdatalist] = useState([
    {
      id: 0,
      name: "egg",
      descraption: "helo",
      color: "danger",
      badage: "w",
      date: "10:20 , 2024/8/2",
      status: "active"
    }
  ]);
  return (
    <Context.Provider value={{
      datalist: datalist
    }}>
      <OptionBar/>
      <ItemShow/>
    </Context.Provider>
  );
}

export default App;