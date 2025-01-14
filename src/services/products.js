const ALL_PRODUCTS_ENDPOINT = 'https://dummyjson.com/products';

export async function getAllProducts() {
  const res = await fetch(ALL_PRODUCTS_ENDPOINT);
  const data = await res.json();

  return data.products;
}
