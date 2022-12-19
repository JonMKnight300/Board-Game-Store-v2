import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import Button from './../forms/Button';
import './styles.scss';
import { analytics } from '../../firebase/utils';

const mapState = state => ({
    product: state.productsData.product
  });
  
  const ProductCard = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productID } = useParams();
    const { product } = useSelector(mapState);
  
    const {
      productThumbnail,
      productName,
      productPrice,
      productDesc,
    } = product;
  

    
    useEffect(() => {
      dispatch(
        fetchProductStart(productID)
      )
  
      return () => {
        dispatch(
          setProduct({})
        )
      }
  
    }, [] );
    
    useEffect(() => {

      var test = product.productName + "";
      var test2 = test.slice( 0, 7 );
      var today = new Date(),
      date = ( today.getFullYear() ) + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
      var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        var date2 = date.slice( 2, 9 );
      
      analytics.logEvent( `${time}_${ test2 }:visit_${date2}` );
      
  } );
  
    const handleAddToCart = (product) => {
      if ( !product ) return;
  
      dispatch(
        addProduct(product)
      );

      var test = product.productName + "";
      var test2 = test.slice( 0, 7 );
      var today = new Date(),
      date = ( today.getFullYear() ) + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate();
      var today = new Date(),
        time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      var date2 = date.slice( 2, 9 );
      
      analytics.logEvent( `${time}_${ test2 }:add_${date2}` );

      history.push('/cart');
    }
  
    const configAddToCartBtn = {
      type: 'button'
    }
  
    return (
      <div className="productCard">
        <div className="hero">
          <img src={productThumbnail} />
        </div>
        <div className="productDetails">
          <ul>
            <li>
              <h1>
                {productName}
              </h1>
            </li>
            <li>
              <span>
                ${productPrice}
              </span>
            </li>
            <li>
              <div className="addToCart">
                <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                  Add to cart
                </Button>
              </div>
            </li>
            <li>
              <span
                className="desc"
                dangerouslySetInnerHTML={{ __html: productDesc }} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default ProductCard;