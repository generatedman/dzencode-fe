import { Order } from '../Order';
import { ProductsList } from '../ProductsList';
import './Orders.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeProductIdList } from '../../features/order/orderSlice';
import classNames from 'classnames';
import { set } from '../../features/products/productsSlice';
import { setOrders } from '../../features/orders/ordersSlice';
import { useEffect } from 'react';
import { getOrders } from '../../api/api';

export const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataFetch = async () => {
      const orders = await getOrders();

      dispatch(setOrders(orders));
    };
		dataFetch();

    return () => {
      dispatch(closeProductIdList());
    };
  }, [dispatch]);

  let isProductListOpened = useSelector((state) => state.order.id);

  if (isProductListOpened) {
    const dataFetch = async () => {
      const data = await (
        await fetch('http://localhost:5000/orders/' + isProductListOpened)
      ).json();

      // set state when the data received
      dispatch(set(data));
    };

    dataFetch();
  }

  const handleCancel = () => {
    dispatch(closeProductIdList());
    dispatch(set([]));
  };

  let actualProducts = useSelector((state) => state.products.products);
	let actualOrders = useSelector((state) => state.orders.orders);

  console.log(actualProducts);
  console.log(isProductListOpened);

  return (
    <section className='orders'>
      <h2 className='orders__title'>Orders / {actualOrders.length}</h2>
      <div
        className={classNames('mx-0 gap-2', {
          'd-flex': isProductListOpened,
        })}
      >
        <div className='orders__list d-flex gap-2 flex-column'>
          {actualOrders.map((order) => {
            return (
              <>
                <Order key={order.id} orderDetails={order} />
              </>
            );
          })}
        </div>
        {isProductListOpened && (
          <div className='orders__products-list d-flex flex-column'>
            <ProductsList products={actualProducts} />
          </div>
        )}
      </div>
      <button onClick={() => handleCancel()}>{isProductListOpened}</button>
    </section>
  );
};
