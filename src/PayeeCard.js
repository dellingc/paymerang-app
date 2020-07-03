import React from 'react';
import RemittanceCard from './RemittanceCard';
import PaymentCard from './PaymentCard';

function PayeeCard(props) {
    let remCards = [];
    props.remittance.forEach(payor => {
        remCards.push(<RemittanceCard payor={payor}/>)
    })
    return (
        <div>
            <h1>
                {props.payee.Name}
            </h1>
            <div>
                    <p><strong>Fax:</strong> {props.payee.Fax}</p>
                    <p><strong>Phone:</strong> {props.payee.Phone}</p>
                    <p><strong>Address:</strong></p>
                    <p>{props.payee.Address.Address1} </p>
                    <p>{props.payee.Address.City}, {props.payee.Address.StateOrProvince} {props.payee.Address.PostalCode}</p>
                    <p><strong>Attention:</strong> {props.payee.Attention}</p>
                    <p><strong>Submission Date:</strong> {props.payee.SubmissionDate}</p>
            </div>
            <div>
                <h3>Payment Card Information</h3>
                <PaymentCard payment={props.payment}/>
            </div>
            <div>
            <h3>Remittance</h3>
                {remCards}
            </div>
        </div>
    )
}

export default PayeeCard;