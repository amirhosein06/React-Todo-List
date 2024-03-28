import '../css/optionbar.css';

const OptionBar = () => {
    return ( 
        <div className="option_container shadow">

             <div className="input_box input-group search_bar">
             <input type="search" className="w-25 search_input form-control" placeholder="Search..." aria-describedby="searchinput"/>
             <div className="input-group-prepend">
             <span className="input-group-text btn bg-primary" id="searchinput"><i className="bi bi-search"></i></span>
             </div>
             </div>


            <div>
                <button className="btn"><i className="bi bi-trash"></i> Remove all</button>
            </div>

            <div>
                <button className="btn"><i className="bi bi-plus-lg"></i> Add new item</button>
            </div>
            
        <div className="dropdown">
         <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Dropdown button
         </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item">All</button>
                <button className="dropdown-item">Complete</button>
                <button className="dropdown-item">Action</button>
              </div>
            </div>
        </div>
    );
}
 
export default OptionBar;