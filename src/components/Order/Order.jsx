import trashBin from '../../assets/images/trash-bin.svg';
import classNames from 'classnames';
import listIcon from '../../assets/images/list.svg';
import './Order.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openProductIdList } from '../../features/order/orderSlice';

export const Order = ({ orderDetails }) => {
  const dispatch = useDispatch();

  const handleOpenProductList = (orderId) => {
    dispatch(openProductIdList(orderId));
		console.log('open');
  };

	const isProductListOpened = useSelector((state) => state.order.id);

  return (
    <div className={classNames('order d-flex align-items-center', {
			'justify-content-start': isProductListOpened,
			'gap-5': isProductListOpened,
			'justify-content-between': !isProductListOpened, 
		})}>
      <span className={classNames('order__title', { hidden: isProductListOpened })}>
        {orderDetails.title}
      </span>
      <div className={'order__products-list d-flex gap-2'}>
        <div className='order__open-list-btn d-flex align-items-center justify-content-center'>
          <img
            src={listIcon}
            alt='list icon'
            className='order__list-icon'
            onClick={() => handleOpenProductList(orderDetails.id)}
          />
        </div>
        <div className={'order__products d-flex flex-column gap-1'}>
          <span className='order__products-count'>24</span>
          <span className='order__products-text'>Products</span>
        </div>
      </div>
      <span className='order__date'>{orderDetails.date.split(' ')[0]}</span>
      <div
        className={classNames('order__price d-flex flex-column gap-1', {
          hidden: isProductListOpened,
        })}
      >
        <div className='order__price-uah'>250000 UAH</div>
        <div className='order__price-usd'>250000 USD</div>
      </div>
      <img
        src={trashBin}
        alt='trash-bin icon'
        className={classNames('product__trash-bin-icon', { hidden: isProductListOpened })}
      />
    </div>
  );
};
