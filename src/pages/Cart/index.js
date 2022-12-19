import React, { useEffect } from 'react';
import { analytics } from '../../firebase/utils';
import Checkout from './../../components/Checkout';

const Cart = ( { } ) =>
{


  useEffect( () =>
  {
    var today = new Date(),
    date = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
    var today = new Date(),
      time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      var date2 = date.slice( 2, 9 );
    analytics.logEvent( `${time}_cart:visit_${date2}` );
    
} );
  return (
    <div>
      <Checkout />
    </div>
  );
}

export default Cart;