import React from 'react';

function PayeeList(props) {
    const payeesArr = []
    props.payees.forEach(payee => {
        console.log(payee)
        payeesArr.push({label: payee, value: payee})
    })
    return(
        <div>
            <select id='psel'>
                <option value="" disabled>Payees</option>
                {props.payees.map((payee) => {
                    return (
                        <option value={payee}>{payee}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default PayeeList;