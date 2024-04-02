import { useContext } from "react";
import Context from "./context/context";
import Item from "./item";
import '../css/itemshow.css';
import png from '../Notebook.png';
import png2 from '../search.png';

const ItemShow = () => {
    const context = useContext(Context);
    const filtering = ()=>{
        if (context.datalist.length === 0) {
            return (
                <div className="no_item">
                <img src={png}/>
                <h4>No items have been added !</h4>
                </div>
            )
        }else{
           const data = [...context.datalist];
           const newdata = data.filter((i) =>
           i.name.toLowerCase().includes(context.searchVal.toLowerCase()));
           if (newdata.length !== 0) {
              if (context.statusval === "All") {
                return newdata.map((item,index)=>
                <Item key={index} data={item}/>
               );
              }else{
                const statusdata = newdata.filter((i) =>
                i.status.toLowerCase().includes(context.statusval.toLowerCase()));
                if (statusdata.length !== 0) {
                    return statusdata.map((item,index)=>
                    <Item key={index} data={item}/>
                 )
                }else{
                    return(
                        <div className="no_item">
                    <img src={png2}/>
                    <h4>No item was found with this status and name !</h4>
                    </div>
                    )
                }
              }
           }else{
            return (
                <div className="no_item">
                <img src={png2}/>
                <h4>No item was found with this name !</h4>
                </div>
            )
           }
        }
    }
    return ( 
        <div className="item_box">
            {filtering()}
        </div>
     );
}
 
export default ItemShow;