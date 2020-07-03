import React from 'react';
import './index.css';

function RemittanceCard(props) {
    return (
        <div style={{marginBottom: '10px'}}>
            <table>
                <tr>
                    <td><strong>Payor Name:</strong> {props.payor.PayorName}</td>
                </tr>
                <tr>
                    <td><strong>Payor ID:</strong> {props.payor.PayorId}</td>
                </tr>
                <tr>
                    <td><strong>Invoice Number:</strong> {props.payor.InvoiceNo}</td>
                </tr>
                <tr>
                    <td><strong>Amount:</strong> {props.payor.Amount}</td>
                </tr>
                <tr>
                    <td><strong>Description:</strong> {props.payor.Description}</td>
                </tr>
            </table>
            <hr style={{color: '#eee'}}/>
        </div>
    )
}

export default RemittanceCard;