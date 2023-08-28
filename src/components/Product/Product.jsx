import './Product.scss';
import image from '../../assets/images/pathToFile.webp';
import trashBin from '../../assets/images/trash-bin.svg';
import { useSelector, useDispatch } from 'react-redux';
import { choose } from '../../features/product/productSlice';
import { Modal } from '../Modal';

export const Product = ({ productDetails }) => {
  const dispatch = useDispatch();

  const handleClick = (productId) => {
		dispatch(choose(productId));
	};
	
	let productToDeleteId = useSelector((state) => state.product.id);
	
	return (
    <>
      {productToDeleteId && <Modal type='product' productId={productDetails.id} productName={productDetails.title} productSerialNumber={productDetails.serialNumber} />}
      <div className='product d-flex align-items-center justify-content-between'>
        <span className='product__indicator'></span>
        <img src={image} alt='product image' className='product__image' />
        <div className='product__title-and-serial-number gap-1 d-flex flex-column'>
          <span className='product__title'>{productDetails.title}</span>
          <span className='product__serial-number'>{productDetails.serialNumber}</span>
        </div>
        <span className='product__type'>{productDetails.type}</span>
        <div className='product__gurantee d-flex flex-column gap-1'>
          <span className='product__guranee-start'>{productDetails.guarantee.start}</span>
          <span className='product__guranee-end'>{productDetails.guarantee.end}</span>
        </div>
        <div className='product__price d-flex flex-column'>
          <span className='product__price-usd'>
            {`${productDetails.price[1].value} ${productDetails.price[0].symbol}`}
          </span>
          <span className='product__price-uah'>
            {`${productDetails.price[1].value} ${productDetails.price[1].symbol}`}
          </span>
        </div>
        <span className='product__order-name'>Very very very very very long order name</span>
        <span className='product__order-date'>{productDetails.date}</span>
        <img
          src={trashBin}
          alt='trash-bin icon'
          className='product__trash-bin-icon'
          onClick={() => handleClick(productDetails.id)}
        />
      </div>
    </>
  );
};
