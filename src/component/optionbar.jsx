import '../css/optionbar.css';

const OptionBar = () => {
    return ( 
        <div className="option_container">

             <div className="input_box input-group search_bar">
             <input type="search" className="w-25 search_input form-control" placeholder="Search..." aria-describedby="searchinput"/>
             <div className="input-group-prepend">
             <span className="input-group-text btn bg-primary text-white search_btn" id="searchinput"><i className="bi bi-search"></i></span>
             </div>
             </div>


            <div>
                <button className="btn btn-outline-danger"><i className="bi bi-trash"></i> Remove all</button>
            </div>

            <div>
                <button className="btn btn-outline-primary"><i className="bi bi-plus-lg"></i> Add new item</button>
            </div>
            
            <select class="form-select select_box" aria-label="Default select example">
               <option value="All" selected>All</option>
               <option value="Complete">Complete</option>
               <option value="active">active</option>
            </select>
        </div>
    );
}
 
export default OptionBar;