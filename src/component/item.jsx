import '../css/callout.css';
import '../css/item.css';

const Item = ({data}) => {
    return ( 
        <div className={"item callout callout_"+data.color}>

            <div className="text_box">
            <h6>{data.name}<span className='badge text-secondary' title={data.date}><i class="bi bi-clock"></i></span></h6>
            <p>{data.descraption}</p>
            </div>

            <div className="btn-box">
                <button className='btn btn-outline-success'><i class="bi bi-check-lg"></i></button>
                <button className='btn btn-outline-primary'><i class="bi bi-pencil-square"></i></button>
                <button className='btn btn-outline-danger'><i class="bi bi-x"></i></button>
            </div>
        </div>
     );
}
 
export default Item;