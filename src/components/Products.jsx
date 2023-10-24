import { products } from '../constants';
import '../stylesheets/Products.css';

const Products = () => (
  <section id='products' className='products'>
    {products.map((product, index) => (
      <div
        key={product.id}
        className={`product-item ${'product-item' + '-' + (index + 1)}`}
      >
        <img src={product.img} alt='Gafas' className='product-item__img'></img>
      </div>
    ))}
  </section>
);

export default Products;
