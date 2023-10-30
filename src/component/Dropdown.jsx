import React from "react";

function Dropdown(props) {
    const handlerSelect= (e)=> {
       
        const x= props.setSelects(e.target.value);
        
      }


    return(
        <div>
      
        <select className="selects" value={props.selects} onChange={(e)=> handlerSelect(e)}>
            
            <option></option>
            <option>All Notes</option>
            <option>Select Notes</option>
            <option>Unselect Notes</option>
        </select>
        
        
        </div>
          
    );
}

export default Dropdown;