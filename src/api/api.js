import { client } from "./fetchClient"

export const getProducts = () => {
	const response = client.get('/products')
	
	return response;
}

export const getOrders = () => {
	const response = client.get('/orders')

	return response;
}

export const deleteProduct = ( id ) => {
	client.delete('/products/' + id);

	return 1;
}