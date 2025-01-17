import { useState } from "react";
import OptionBar from "./component/optionbar";
import ItemShow from "./component/itemshow";
import Context from "./component/context/context";
import CreateItem from "./component/createitem";

function App() {
  const [datalist, setdatalist] = useState([]);
  const [Createstatus, setCreatestatus] = useState(false);
  const [inputsDevalue, setinputsDevalue] = useState("");
  const [searchVal, setsearchVal] = useState("");
  const [statusval, setstatusval] = useState("All");

  return (
    <Context.Provider value={{
      datalist: datalist,
      dataset: setdatalist,
      createstaus: Createstatus,
      createstausset: setCreatestatus,
      inputsDevalue: inputsDevalue,
      inputsDevalueset: setinputsDevalue,
      searchVal: searchVal,
      searchValset: setsearchVal,
      statusval: statusval,
      statusvalset: setstatusval
    }}>
      <OptionBar/>
      {Createstatus && (<CreateItem/>)}
      <ItemShow/>
    </Context.Provider>
  );
}

export default App;