import { useContext } from "react";
import Context from "./context/context";
import Item from "./item";
import '../css/itemshow.css';
import png from '../Notebook.png';

const ItemShow = () => {
    const context = useContext(Context);
    return ( 
        <div className="item_box">
            {context.datalist.length === 0 ? (
                <div className="no_item">
                    <img src={png}/>
                    <h4>No items have been added !</h4>
                </div>
            ):(
                context.datalist.map((item,index)=>(
                    <Item key={index} data={item}/>
                ))
            )}
        </div>
     );
}
 
export default ItemShow;