import React from 'react';
import RemittanceCard from './RemittanceCard';
import PaymentCard from './PaymentCard';

function PayeeCard(props) {
    let remCards = [];
    props.remittance.forEach(payor => {
        remCards.push(<RemittanceCard payor={payor} />)
    })
    return (
        <div>
            <div className='container'>
                <div className='payeeDiv'>
                    <h1>
                        {props.payee.Name}
                    </h1>
                    <table>
                        <tr>
                            <td><strong>Fax:</strong> {props.payee.Fax}</td>
                        </tr>
                        <tr>
                            <td><strong>Phone:</strong> {props.payee.Phone}</td>
                        </tr>
                        <tr>
                            <td><strong>Address: </strong>
                                <span>{props.payee.Address.Address1}, </span>
                                <span>{props.payee.Address.City}, {props.payee.Address.StateOrProvince} {props.payee.Address.PostalCode}</span></td>
                        </tr>
                        <tr>
                            <td><strong>Attention:</strong> {props.payee.Attention}</td>
                        </tr>
                        <tr>
                            <td><strong>Submission Date:</strong> {props.payee.SubmissionDate}</td>
                        </tr>
                    </table>
                </div>
                <div className='paymentDiv'>
                    <h2>Payment Card Information</h2>
                    <PaymentCard payment={props.payment} />
                </div>
            </div>

            <div>
                <div className='remDiv'>
                    <h2 className='remHeader'>Remittance</h2>
                    {remCards}
                </div>

            </div>

        </div>
    )
}

export default PayeeCard;