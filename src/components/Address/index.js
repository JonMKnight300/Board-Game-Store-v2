import React from 'react';
import { useHistory } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from '../forms/Button';
import { analytics } from '../../firebase/utils';

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
} );
  
const Address = ({ }) => {
    const history = useHistory();



  
    return (
      <div className="addressandpayment">
        <h1>
          Checkout
        </h1>
  
        <div className="address">

            <table border="0" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                      <tbody>
                        <tr>
                          <th>
                            Enter your address:
                          </th>
                          <th>
                            Name
                          </th>
                          <th>
                            Address
                          </th>
                          <th>
                            City
                          </th>
                          <th>
                            Zip
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0" cellSpacing="0" cellPadding="0">
                      <tbody>

                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table border="0" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <td>
                            <table border="0" cellPadding="10" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td>
                                  <h3>
                                    Enter Credit Card Info
                                  </h3>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table border="0" cellPadding="10" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td>
                                    <Button onClick={() => history.push('/payment')}>
                                      Pay For Items
                                    </Button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>

        </div>
      </div>
    );
  };
  
  export default Address;