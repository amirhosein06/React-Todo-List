import { useState } from "react";
import OptionBar from "./component/optionbar";
import ItemShow from "./component/itemshow";
import Context from "./component/context/context";
import CreateItem from "./component/createitem";

function App() {
  const [datalist, setdatalist] = useState([
    {
      id: 1,
      name: "egg",
      descraption: "helo",
      color: "danger",
      date: "10:20 , 2024/8/2",
      status: "active"
    }
  ]);
  const [Createstatus, setCreatestatus] = useState(false);
  const [inputsDevalue, setinputsDevalue] = useState("");
  return (
    <Context.Provider value={{
      datalist: datalist,
      dataset: setdatalist,
      createstaus: Createstatus,
      createstausset: setCreatestatus,
      inputsDevalue: inputsDevalue,
      inputsDevalueset: setinputsDevalue
    }}>
      <OptionBar/>
      {Createstatus && (<CreateItem/>)}
      <ItemShow/>
    </Context.Provider>
  );
}

export default App;