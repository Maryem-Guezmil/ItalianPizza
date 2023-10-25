import axios from "axios"
export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        const response = await axios.post('/api/orders/placeorder', { token, subtotal, currentUser, cartItems })
        dispatch({ type: 'PLACE_ORDER_SUCCESS' })
        console.log(response)

    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAILED' })
        console.log(error)
    }
}

export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'GET_USER_ORDERS_REQUEST' })
    try {
        const response = await axios.post('/api/orders/getuserorders', { userid: currentUser._id })
        console.log(response)
        //bsh thotelna data f store
        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error.response.data })

    }
}

export const getOrders = () => async (dispatch) => {
    dispatch({ type: 'GET_ORDERS_REQUEST' });
    try {
        const response = await axios.get('/api/orders/getallorders');
        dispatch({ type: 'GET_ORDERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_ORDERS_FAILED', payload: error.response.data });
    }
};
//update button deliver to delivered
export const updateDeliveryStatus = (orderId) => async (dispatch) => {
    dispatch({ type: 'UPDATE_DELIVERY_STATUS_REQUEST' });
    try {
        // API call to update the database
        const response = await axios.put(`/api/orders/getallorders/${orderId}`, { isDelivered: true });
        dispatch({ type: 'UPDATE_DELIVERY_STATUS_SUCCESS',  payload: { orderId, isDelivered: true }});
        console.log(`Order with ID ${orderId} updated successfully`);
    } catch (error) {
        dispatch({ type: 'UPDATE_DELIVERY_STATUS_FAILED', payload: error.response.data });
    }
};

