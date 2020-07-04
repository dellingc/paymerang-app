import React from 'react';
import './App.css';

class PayeeSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    getSelectedValue = (e) => {
        let selectedVal = e.target.value;
        if(selectedVal !== '---'){
            this.props.handleChange(parseInt(selectedVal));
        } 
    }

    render() {
        let options = [];
        this.props.paymentData.forEach(payee => {
            options.push(
                <option 
                key={this.props.paymentData.indexOf(payee)} 
                value={this.props.paymentData.indexOf(payee)}>{payee.Payee.Name}
                </option>)
        })
        return (
            <select className='pageBtns' onChange={this.getSelectedValue}>
                <option>---</option>
                {options}
            </select>
        )
    }


}

export default PayeeSelect;