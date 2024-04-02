import { useState,useRef,useContext,useEffect } from 'react';
import '../css/callout.css';
import '../css/item.css';
import Context from "./context/context";

const Item = ({data}) => {
    const nametext = useRef();
    const itemBox = useRef();
    const Xbutton = useRef();
    const [Checked, setChecked] = useState(false);
    const context = useContext(Context);

    // buggggg !!!!!!!!!!!!!!!!!!!!!!!!

    const handledelete = ()=>{
        const iseven = i => i.id !== data.id;
        const newdata = [...context.datalist];
        const filteredarray = newdata.filter(iseven);
        context.dataset(filteredarray);

        if (data.status !== "complete") {
        setChecked(false);
        nametext.current.style.textDecoration = "none";
        itemBox.current.style.opacity = "1";
        Xbutton.current.classList.add("btn-outline-danger");
        Xbutton.current.classList.remove("bg-danger");
        Xbutton.current.classList.remove("text-white");
        }
    };
    const handleEdit =()=>{
        context.createstausset(true);
        context.inputsDevalueset({
            nameval: data.name,
            desval: data.descraption,
            colorval: data.color,
            id: data.id
        })
    };
    const handlecheck = ()=>{
        const newdata = [...context.datalist];
        const indexed =  newdata.indexOf(i=>i.id === data.id);
        newdata[indexed + 2].status = "complete";
        context.dataset(newdata);

        setChecked(true);
        nametext.current.style.textDecoration = "line-through";
        itemBox.current.style.opacity = "0.5";
        Xbutton.current.classList.remove("btn-outline-danger");
        Xbutton.current.classList.add("bg-danger");
        Xbutton.current.classList.add("text-white");
    };

    return ( 
        <div className={"item callout callout_"+data.color} ref={itemBox}>

            <div className="text_box">
            <h6 ref={nametext}>{data.name}<span className='badge text-secondary' title={data.date}><i class="bi bi-clock"></i></span></h6>
            <p>{data.descraption}</p>
            </div>

            <div className="btn-box">
                <button className='btn btn-outline-success' onClick={handlecheck} disabled={Checked}><i class="bi bi-check-lg"></i></button>
                <button className='btn btn-outline-primary' disabled={Checked} onClick={handleEdit}><i class="bi bi-pencil-square"></i></button>
                <button className='btn btn-outline-danger' ref={Xbutton} onClick={handledelete}><i class="bi bi-x"></i></button>
            </div>
        </div>
     );
}
 
export default Item;