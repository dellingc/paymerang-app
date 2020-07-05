import React from 'react';
import './App.css';

function PageBtn(props){
    let disabled = false
    if(props.checkCurrentPage() === 0 && (props.btnType === 'first' || props.btnType === 'prev')){
        disabled = true;
    } else if (props.checkCurrentPage() === props.total - 1 && (props.btnType === 'last' || props.btnType === 'next')){
        disabled = true
    }
    return(
        <button 
            className='pageCtrl' 
            disabled={disabled} 
            onClick={() => {
                props.handleClick(props.checkCurrentPage(), props.total, props.btnType)
            }}>
            {props.operation}
        </button>
    )
}

export default PageBtn;