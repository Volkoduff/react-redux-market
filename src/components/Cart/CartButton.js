import classes from './CartButton.module.css';
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartAmount = useSelector((state) => state.cart.totalQuantity);

    const cartToggleHandler = () => {
        dispatch(uiActions.toggleCart())
    };

    return (
        <button onClick={cartToggleHandler} className={classes.button}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartAmount}</span>
        </button>
    );
};

export default CartButton;
