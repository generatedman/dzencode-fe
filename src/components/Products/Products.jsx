import './Products.scss';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../features/products/productsSlice';
import { useEffect } from 'react';
import { Dropdown } from '../Dropdown';
import { ProductsList } from '../ProductsList';

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

export const Products = () => {
  const dispatch = useDispatch();
  
	useEffect(() => {
		dispatch(set(productsFromServer));
	}, [dispatch]);

	let actualProducts = useSelector((state) => state.products.products);
	let productType = useSelector((state) => state.productType.type);

	if (productType !== 'Choose type') {
		actualProducts = actualProducts.filter((product) => product.type === productType);
	}

  return (
    <section className='products'>
      <h2 className='products__title'>Products / {actualProducts.length}</h2>
			<Dropdown />
			<div className='products__items d-flex gap-2 flex-column'>
				<ProductsList products={actualProducts}/>
      </div>
    </section>
  );
};
