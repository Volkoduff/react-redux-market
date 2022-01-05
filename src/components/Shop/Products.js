import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
    {id: 1, price: 6, title: 'Me first thing...', description: 'asdlkajdlk'},
    {id: 2, price: 8, title: 'Me second thing...', description: 'asdlkajdlk'}
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_DATA.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
