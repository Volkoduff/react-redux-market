import React, {Fragment, useEffect} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";
import {useSelector, useDispatch} from "react-redux";
import {sendCardData, fetchCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const cartIsShown = useSelector((state) => state.ui.cartIsShown);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cart.isChanged) {
            dispatch(sendCardData(cart));
        }
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && <Notification
                status={notification.status}
                message={notification.message}
                title={notification.title}/>
            }
            <Layout>
                {cartIsShown && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>

    );
}

export default App;
