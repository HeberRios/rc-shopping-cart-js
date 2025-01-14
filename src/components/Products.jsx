import { AddToCartIcon } from './Icons';

export function Products({ products }) {
  return (
    <main className='products-container container'>
      <ul className='products-list'>
        {products.map(function (product) {
          return (
            <li key={product.id} className='product-item'>
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description.slice(0, 80).trim().concat('...')}</p>
              <span>${product.price}</span>
              <button className='btn'>{<AddToCartIcon />}</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
