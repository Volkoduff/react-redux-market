import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(uiActions.showNotifications({
            status: 'pending',
            title: 'Fetching...',
            message: 'Fetching cart data!',
        }));

        const fetchData = async () => {
            const response = await fetch('https://react-http-9b6a3-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data');
            }

            return await response.json();
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));
            dispatch(uiActions.showNotifications({
                status: 'success',
                title: 'Success',
                message: 'Cart downloaded',
            }));
        } catch (error) {
            dispatch(uiActions.showNotifications({
                status: 'error',
                title: 'Error',
                message: `Fetching cart data failed`,
            }));
        }
    }
};

export const sendCardData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotifications({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
        }));

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-http-9b6a3-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity
                    })
                });
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotifications({
                status: 'success',
                title: 'Success',
                message: 'Sending cart successfully!',
            }));
        } catch (error) {
            dispatch(uiActions.showNotifications({
                status: 'error',
                title: 'Error',
                message: `Sending cart data failed`,
            }))
        }
    }
};
