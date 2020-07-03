import React from 'react';

function PageButton(props){
    return(
        <button onClick={props.handleClick}>{props.operation}</button>
    )
}

export default PageButton;