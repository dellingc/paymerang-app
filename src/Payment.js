import React from 'react';

function Payment(props) {
    return (
        <div>
            <h1>
                {props.payee.Name}
            </h1>
            <div>
                    <p>Fax: {props.payee.Fax}</p>
                    <p>Phone: {props.payee.Phone}</p>
                    <p>{props.payee.Address.Address1} </p>
                    <p>{props.payee.Address.City}, {props.payee.Address.StateOrProvince} {props.payee.Address.PostalCode}</p>
            </div>
        </div>
    )
}

export default Payment;