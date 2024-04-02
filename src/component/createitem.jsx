import '../css/createitem.css';
import { useRef,useState,useContext,useEffect } from 'react';
import Context from "./context/context";

const CreateItem = () => {
    const nameinput = useRef();
    const colorinput = useRef();
    const [selectval, setselectval] = useState(["default","#777"]);
    const [nameval, setnameval] = useState("");
    const [areaval, setareaval] = useState("");
    const context = useContext(Context);

    useEffect(()=>{
        if (context.inputsDevalue !== "") {
            setnameval(context.inputsDevalue.nameval);
            setareaval(context.inputsDevalue.desval);
        }
    },[])

    const handleselect = (e)=>{
        const val = e.target.value;
        const newval = val.split(",");
        setselectval(newval);
    }
    const closing = ()=>{
        context.createstausset(false);
        context.inputsDevalueset("");
    }
    const handlenamechange = (e)=>{
        setnameval(e.target.value);
    }
    const hendlearea = (e)=>{
        setareaval(e.target.value);
    }
    const handlecreate = ()=>{
        if (!nameval || nameval === " ") {
            nameinput.current.placeholder = "please fill out this input !";
        }else{
            if (context.inputsDevalue === "") {
            const time = new Date();
            const createdData = {
                id: context.datalist.length +1,
                name: nameval,
                descraption: areaval,
                color: selectval[0],
                date: time.toLocaleString(),
                status: "active"
            }
            const newdata = [...context.datalist,createdData];
            context.dataset(newdata);
            context.createstausset(false);
            context.inputsDevalueset("");
            }else{
                const time = new Date();
                const createddata = [...context.datalist];
                createddata[context.inputsDevalue.id -1] = {
                    id: context.inputsDevalue.id,
                    name: nameval,
                    descraption: areaval,
                    color: selectval[0],
                    date: time.toLocaleString(),
                    status: "active"
                }
                context.dataset(createddata);
                context.createstausset(false);
                context.inputsDevalueset("");
            }
        }
    }

    return ( 
       <div className="blurback">
                <div className='create_container'>
                    <div className="close_btn btn" onClick={closing}><i className="bi bi-x"></i></div>

           <div className="left">
            <label htmlFor="name">Name: *</label>
            <input type='text' ref={nameinput} className='form-control' id='name' maxLength={14} value={nameval} onChange={handlenamechange}/>

            <div className="color_box">
            <label htmlFor="color">Color:</label>
            <select ref={colorinput} value={selectval} onChange={handleselect} style={{color: selectval[1]}} className="form-select select_box" aria-label="Default select example" id='color'>
               <option value={["default","#777"]}  style={{background:"#777"}} selected>default</option>
               <option value={["primary","#428bca"]} style={{background:"#428bca"}}>primary</option>
               <option value={["success","#5cb85c"]} style={{background:"#5cb85c"}}>success</option>

               <option value={["danger","#d9534f"]} style={{background:"#d9534f"}}>danger</option>
               <option value={["warning","#f0ad4e"]} style={{background:"#f0ad4e"}}>warning</option>
               <option value={["info","#5bc0de"]} style={{background:"#5bc0de"}}>info</option>
               <option value={["bdc","#29527a"]} style={{background:"#29527a"}}>purple</option>
            </select>
            </div>
            
            </div>

            <div className="right">
            <label htmlFor="des">Descrabtion:</label>
            <textarea  className='form-control' id='des' maxLength={50} value={areaval} onChange={hendlearea}/>
            </div>

           <div className="bottom">
            <button className="btn btn-primary" onClick={handlecreate}>Create Item</button>
           </div>
        </div>
       </div>
     );
}
 
export default CreateItem;