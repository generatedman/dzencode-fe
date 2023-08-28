import trashBin from '../../assets/images/trash-bin.svg';
import listIcon from '../../assets/images/list.svg';
import './Order.scss';
import { useDispatch } from 'react-redux';
import { openProductIdList } from '../../features/order/orderSlice';

export const Order = ({ orderDetails }) => {
  const dispatch = useDispatch();

  const handleClick = (orderId) => {
    dispatch(openProductIdList(orderId));
  };

  return (
    <>
      <div className={`order d-flex align-items-center justify-content-between`}>
        <span className='order__title'>{orderDetails.title}</span>
        <div className='order__products-list d-flex gap-2'>
          <div
            className='order__open-list-btn d-flex align-items-center justify-content-center'
            onClick={() => handleClick(orderDetails.id)}
          >
            <img src={listIcon} alt='list icon' className='order__list-icon' />
          </div>
          <div className='order__products d-flex flex-column gap-1'>
            <span className='order__products-count'>24</span>
            <span className='order__products-text'>Products</span>
          </div>
        </div>
        <span className='order__date'>{orderDetails.date}</span>
        <div className='order__price d-flex flex-column gap-1'>
          <div className='order__price-uah'>250000 UAH</div>
          <div className='order__price-usd'>250000 USD</div>
        </div>
        <img
          src={trashBin}
          alt='trash-bin icon'
          className='product__trash-bin-icon'
        />
      </div>
    </>
  );
};
