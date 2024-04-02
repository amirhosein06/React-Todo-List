import '../css/optionbar.css';
import { useContext,useState } from "react";
import Context from "./context/context";

const OptionBar = () => {
    const context = useContext(Context);
    const [Sinputval, setSinputval] = useState("");
    const [Tinputval, setTinputval] = useState("All");

    const handlenewitem = ()=>{
        context.createstausset(true);
    }
    const handleremovall = ()=>{
        context.dataset([]);
        setTinputval("All");
        context.statusvalset("All");
    }
    const handlesearch = (e)=>{
       setSinputval(e.target.value);
       context.searchValset(e.target.value);
    }
    const handlestatuschange =(e)=>{
        setTinputval(e.target.value);
        context.statusvalset(e.target.value);
    }

    return ( 
        <div className="option_container">

             <div className="input_box input-group search_bar">
             <input type="search" className="w-25 search_input form-control"
              placeholder="Search..." aria-describedby="searchinput" value={Sinputval} onChange={handlesearch}/>
             <div className="input-group-prepend">
             <span className="input-group-text btn bg-primary text-white search_btn" id="searchinput"><i className="bi bi-search"></i></span>
             </div>
             </div>


            <div>
                <button className="btn btn-outline-danger" onClick={handleremovall}><i className="bi bi-trash"></i> Remove all</button>
            </div>

            <div>
                <button className="btn btn-outline-primary" onClick={handlenewitem}><i className="bi bi-plus-lg"></i> Add new item</button>
            </div>
            
            <select class="form-select select_box" aria-label="Default select example" value={Tinputval} onChange={handlestatuschange}>
               <option value="All" selected>All</option>
               <option value="complete">Complete</option>
               <option value="active">active</option>
            </select>
        </div>
    );
}
 
export default OptionBar;