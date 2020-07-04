import React from 'react';
import './App.css';

function PageBtnFirst(props){
    let disabled = false
    if(props.checkCurrentPage() == 0){
        disabled = true;
    } 
    return(
        <button className='pageCtrl' disabled={disabled} onClick={() => {props.handleClick()}}>{props.operation}</button>
    )
}

export default PageBtnFirst;