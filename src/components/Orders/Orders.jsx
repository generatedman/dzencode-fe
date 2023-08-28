import { Order } from '../Order';
import { ProductsList } from '../ProductsList';
import './Orders.scss';
import { useSelector } from 'react-redux';

const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
  },
];

const productsFromServer = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product1aaaaaaaaaaaaaaaaaaa',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product1aaaaaaaaaaaaaaaaaaa',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product1aaaaaaaaaaaaaaaaaaa',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
];


export const Orders = () => {
	let actualProducts = useSelector((state) => state.products.products);
	let isProductListOpened = useSelector((state) => state.order.id);

	return (
    <section className='orders'>
      <h2 className='orders__title'>Orders / {orders.length}</h2>
      <div className='container d-flex gap-1'>
        <div className='orders__list d-flex gap-2 flex-column'>
          {orders.map((order) => {
            return (
              <>
                <Order key={order.id} orderDetails={order} />
              </>
            );
          })}
        </div>
        <div className='orders__products-list'>
          <ProductsList products={actualProducts} />
        </div>
      </div>
    </section>
  );
}
