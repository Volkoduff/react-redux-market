import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {
    const productList = useSelector((state) => state.cart.items);
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {productList.map((el) =>
                    <CartItem
                        key={el.id}
                        item={{
                            id: el.id,
                            title: el.title,
                            quantity: el.quantity,
                            total: el.total,
                            price: el.price
                        }}/>
                )}
            </ul>
        </Card>
    );
};

export default Cart;
