import React, { useEffect } from 'react';
import { analytics } from '../../firebase/utils';
import PaymentDetails from './../../components/PaymentDetails';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { publishableKey } from './../../stripe/config';

// const stripePromise = loadStripe(publishableKey);



const Payment = () =>
{
    useEffect( () =>
{
  var today = new Date(),
  date = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
  var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var date2 = date.slice( 2, 9 );
  analytics.logEvent( `${time}_checkout_${date2}` );
  
} );
  return (
   // <Elements stripe={stripePromise}>
      <PaymentDetails />
    //</Elements>
  );
}

export default Payment;