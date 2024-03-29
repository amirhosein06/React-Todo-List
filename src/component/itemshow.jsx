import { useContext } from "react";
import Context from "./context/context";
import Item from "./item";
import '../css/itemshow.css';

const ItemShow = () => {
    const context = useContext(Context);
    return ( 
        <div className="item_box">
            {context.datalist.length === 0 ? (
                <h1>Not Item</h1>
            ):(
                context.datalist.map((item)=>(
                    <Item data={item}/>
                ))
            )}
        </div>
     );
}
 
export default ItemShow;