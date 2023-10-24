import { products } from '../constants';
import '../stylesheets/Products.css';

const Products = () => (
  <section id='products' className='products'>
    <h2 className='section-title'>Productos</h2>
    <div className='products-container'>
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`product-item ${'product-item' + '-' + (index + 1)} width-100`}
        >
          <img
            src={product.img}
            alt='Gafas'
            className='product-item__img'
          ></img>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
