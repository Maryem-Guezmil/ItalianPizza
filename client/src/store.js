import { combineReducers } from 'redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzasReducer ,DeletePizzaReducer,AddPizzaReducer,updatePizzaReducer,pizzaDetailsReducer} from './reducers/pizzareducers'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer,UsersReducer,DeleteUserReducer } from './reducers/userReducer'
import { placeOrderReducer ,getUserOrdersReducer,getOrdersReducer} from './reducers/orderReducer'
import{searchReducer} from './reducers/searchReducer'
const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer,
    UsersReducer:UsersReducer,
    DeleteUserReducer:DeleteUserReducer,
    DeletePizzaReducer:DeletePizzaReducer,
    AddPizzaReducer:AddPizzaReducer,
    getOrdersReducer:getOrdersReducer,
    searchReducer:searchReducer,
    pizzaDetailsReducer:pizzaDetailsReducer,
    updatePizzaReducer:updatePizzaReducer

    


})
/*checking if there is an item in local storage with the key 'cartItems'.If it exists,it is parsing the JSON string stored 
there and saving it as the variable 'cartItems'. If it does not exist, it is setting 'cartItems' as an empty array.*/
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: {
        cartItems: cartItems,
    },
    loginUserReducer: {
        currentUser: currentUser,
    }
}
//to track the redux states in google chrome
//allows for easier debugging of the Redux store
const composeEnhancers = composeWithDevTools({})
//thunk allow to use asynch actions in the store
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
export default store