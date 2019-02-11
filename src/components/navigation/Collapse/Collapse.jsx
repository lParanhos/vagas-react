import React from 'react';

const Collapse = (props) => (

    <div>
        
            <a className="btn btn-primary" href={"#" + props.collapseId} data-toggle="collapse"  
                aria-expanded="false"
                >
                {props.buttonText}
            </a>
            <div className="collapse mb-3" id={props.collapseId}>
                {props.children}
            </div>
    </div >

)

export default Collapse;