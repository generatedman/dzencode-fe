import './Modal.scss';
import productImage from '../../assets/images/pathToFile.webp';
import { useDispatch, useSelector } from 'react-redux';
import { choose } from '../../features/product/productSlice';
import { set } from '../../features/products/productsSlice';
import { deleteProduct } from '../../api/api';

export const Modal = ({ 
	productName = null, 
	productSerialNumber = null, 
	productId = null, 
}) => {
  const dispatch = useDispatch();
  
	const handleCancel = () => {
    dispatch(choose(null));
  };

  const actualProducts = useSelector((state) => state.products.products);
	
	const handleDelete = async (id) => {
		await deleteProduct(id);
		
		const filteredProducts = actualProducts.filter(product => product.id != id);
		dispatch(set(filteredProducts));
		
		dispatch(choose(null));
  };

  return (
    <div className='modal d-flex'>
      <div className='modal__container d-flex flex-column'>
        <div className='modal__header d-flex align-items-center px-4'>
          <p className='modal__question'>Вы уверены что хотите удалить этот продукт?</p>
        </div>
        <div className='modal__product d-flex gap-4 align-items-center px-4 py-2'>
          <span className='modal__product-indicator'></span>
          <img src={productImage} alt='product image' className='modal__product-image' />
          <div className='modal__product-name-serial-number mx-4 d-flex flex-column gap-2'>
            <span className='modal__product-title'>{productName}</span>
            <span className='modal__product-serial-number'>{productSerialNumber}</span>
          </div>
        </div>
        <div className='modal__bottom d-flex align-items-center justify-content-end px-4 gap-2'>
          <button className='modal__cancel-button' onClick={() => handleCancel()}>
            cancel
          </button>
          <button className='modal__delete-button' onClick={() => handleDelete(productId)}>delete</button>
        </div>
      </div>
    </div>
  );
};
