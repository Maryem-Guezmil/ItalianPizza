import axios from "axios"
import { clearCart } from "./cartActions"
export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_RESGISTER_REQUEST' })
    try {
        //send the data to backend
        const response = await axios.post('/api/users/register', user)
        console.log(response)
        dispatch({ type: 'USER_RESGISTER_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'USER_RESGISTER_FAILED', payload: error })
    }
}

export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })
    try {
        //send the data to backend
        const response = await axios.post('/api/users/login', user)
        console.log(response)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = "/"
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    dispatch(clearCart());
    window.location.href = '/login'
}

//an action to fetch the users from your API and store the data in the Redux store
export const fetchUsers = () => async dispatch => {
    const res = await axios.get('/api/users/allUsers');
    console.log(res)
    dispatch({ type: 'FETCH_USERS', payload: res.data });
};

export const deleteUser = (userId) => async dispatch => {
    dispatch({ type: 'DELETE_USER_REQUEST' })
    try {
        //send the data to backend
        const response = await axios.delete(`/api/users/${userId}`)
        console.log(response)
        dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId })
        window.location.href = '/admin'

    } catch (error) {
        dispatch({ type: 'DELETE_USER_FAILED', payload: error })

    }
};



