import './Products.scss';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../features/products/productsSlice';
import { useEffect } from 'react';
import { getProducts } from '../../api/api';
import { Dropdown } from '../Dropdown';
import { ProductsList } from '../ProductsList';

export const Products = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const dataFetch = async () => {
      const products = await getProducts();

      dispatch(set(products));
    };

    dataFetch();
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
        <ProductsList products={actualProducts} />
      </div>
    </section>
  );
};
