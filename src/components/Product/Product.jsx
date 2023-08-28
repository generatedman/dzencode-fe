import './Product.scss';
import image from '../../assets/images/pathToFile.webp';

export const Product = ({ productDetails }) => {
	return (
    <div className='product'>
      <span className='product__indicator'></span>
      <img src={image} alt='product image' className='product__image'/>
			{productDetails.img}
    </div>
  );
}
