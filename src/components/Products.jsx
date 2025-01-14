import { AddToCartIcon } from './Icons';

export function Products({ products }) {
  return (
    <ul>
      {products.map(function (product) {
        return (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description.slice(0, 80).trim().concat('...')}</p>
            <span>${product.price}</span>
            {<AddToCartIcon />}
          </li>
        );
      })}
    </ul>
  );
}
