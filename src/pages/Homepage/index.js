import React, { useEffect } from 'react';
import Directory from '../../components/Directory';
import { analytics } from '../../firebase/utils';
import './styles.scss';

const Homepage = props =>
{
    useEffect(() => {
        var today = new Date(),
        date = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
        var today = new Date(),
          time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
          var date2 = date.slice( 2, 9 );
        analytics.logEvent( `${time}_hmpage_${date2}` );
        
    } );
    return (
        <section className='homepage'>
            <Directory />
        </section>
    );
};

export default Homepage;