import React, { useEffect } from 'react';
import ProductResults from '../../components/ProductResults';
import { analytics } from '../../firebase/utils';

const Search = ( { } ) =>
{
    useEffect( () =>
    {
      var today = new Date(),
      date = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
      var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var date2 = date.slice( 2, 9 );
      analytics.logEvent( `${time}_search_${date2}` );
      
    } );
    return (
        <div className='searchPage'>
            <ProductResults />
        </div>
    )
}

export default Search;