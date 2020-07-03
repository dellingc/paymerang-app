import React from 'react';
import './index.css';

function RemittanceCard(props) {
    return (
        <div style={{marginBottom: '10px', border: 'solid black 2px'}}>
            <table>
                <tr>
                    <td>Payor Name: {props.payor.PayorName}</td>
                </tr>
                <tr>
                    <td>Payor ID: {props.payor.PayorId}</td>
                </tr>
                <tr>
                    <td>Invoice Number: {props.payor.InvoiceNo}</td>
                </tr>
                <tr>
                    <td>Amount: {props.payor.Amount}</td>
                </tr>
                <tr>
                    <td>Description: {props.payor.Description}</td>
                </tr>
            </table>
        </div>
    )
}

export default RemittanceCard;