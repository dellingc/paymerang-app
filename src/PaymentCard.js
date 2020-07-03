import React from 'react';

function PaymentCard(props) {
    return (
        <div style={{border: 'solid black 2px'}}>
            <table>
                <tr>
                    <td>PAN: {props.payment.PAN}</td>
                </tr>
                <tr>
                    <td>CVV: {props.payment.CVV}</td>
                </tr>
                <tr>
                    <td>Exp: {props.payment.Exp}</td>
                </tr>
            </table>
        </div>

    )
}

export default PaymentCard;