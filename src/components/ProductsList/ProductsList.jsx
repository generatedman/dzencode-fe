import { Product } from '../Product/Product';

export const ProductsList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <Product key={product.id} productDetails={product} />
          </>
        );
      })}
    </>
  );
};
