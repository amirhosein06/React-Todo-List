import { useState } from "react";
import OptionBar from "./component/optionbar";

function App() {
  const [datalist, setdatalist] = useState([]);
  return (
    <OptionBar/>
  );
}

export default App;