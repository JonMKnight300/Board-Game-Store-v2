import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { analytics } from '../../../firebase/utils';
import { removeCartItem, addProduct, reduceCartItem } from './../../../redux/Cart/cart.actions';

const Item = (product) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    );
  }

  const handleAddProduct = (product) => {
    dispatch(
      addProduct( product )
      
    );
    var today = new Date(),
    date = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
    var today = new Date(),
      time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    
      analytics.logEvent(`${time}_${productName}_added_${date}`);


  }

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    );
  }

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>
            {productName}
          </td>
          <td>
            <span className="cartBtn"
              onClick={() => handleReduceItem(product)}>
              {`< `}
            </span>
            <span>
              {quantity}
            </span>
            <span className="cartBtn"
              onClick={() => handleAddProduct(product)}>
              {` >`}
            </span>
          </td>
          <td>
            ${productPrice}
          </td>
          <td align="center">
            <span className="cartBtn remove" onClick={() => handleRemoveCartItem(documentID)}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Item;