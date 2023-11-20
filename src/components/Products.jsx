import { products } from '../constants';
import '../stylesheets/Products.css';

const Products = () => (
  /* Maquetar el contenido de los productos a travéz del contenido de la información de la constante  "products"*/
  <section id='products' className='products'>
    <h2 className='section-title'>Productos</h2>
    <div className='products-container'>
      {products.map((product, index) => ( /* Recorrer cada producto obteniendolos individualmente con su index */
        <div
          key={product.id}
          className={`product-item ${'product-item' + '-' + (index + 1)} width-100`} /* Clase concatenada "product-item-2, 3, 4, etc" */
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
