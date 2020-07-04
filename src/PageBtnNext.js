import React from 'react';
import './App.css';

function PageBtnNext(props){
    let disabled = false
    if(props.checkCurrentPage() == 14){
        disabled = true;
    } 
    return(
        <button className='pageCtrl' disabled={disabled} onClick={props.handleClick}>{props.operation}</button>
    )
}

export default PageBtnNext;