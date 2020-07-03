import React from 'react';

class PayeeSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    getSelectedValue = (e) => {
        let selectedVal = e.target.value;
        if(selectedVal !== 'Jump to company'){
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
            <select onChange={this.getSelectedValue}>
                <option>Jump to company</option>
                {options}
            </select>
        )
    }


}

export default PayeeSelect;