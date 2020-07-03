import React from 'react';
import './App.css';

function PaymentCard(props) {
    return (
        <div className='cardInfo'>
            <table>
                <tr>
                    <td><strong>PAN:</strong> {props.payment.PAN}</td>
                </tr>
                <tr>
                    <td><strong>CVV:</strong> {props.payment.CVV}</td>
                </tr>
                <tr>
                    <td><strong>Exp:</strong> {props.payment.Exp}</td>
                </tr>
            </table>
        </div>

    )
}

export default PaymentCard;