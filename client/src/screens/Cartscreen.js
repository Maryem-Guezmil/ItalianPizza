import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'

function Cartscreen() {
  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState

  const cartstate = useSelector(state => state.cartReducer)
  const cartItems = cartstate.cartItems
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <h2 style={{ fontSize: '40px', textAlign: 'left' }}>My Cart </h2>
          {cartItems.map(item => {
            return <div className="flex-container">

              <div className='text-left m-2 w-100' >
                <h1 style={{ width: '400px' }}>{item.name} [{item.varient}]</h1>
                <h1>Price : {item.quantity} * {item.prices[0][item.varient]} dt = {item.price}  dt </h1>
                <h1 style={{ display: 'inline' }}>Quantity : </h1>
                <FontAwesomeIcon style={{ color: 'green' }} icon={faPlus} onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }} />
                <b> {item.quantity} </b>
                <FontAwesomeIcon style={{ color: 'red' }} icon={faMinus} onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }} />
                <hr />
              </div>
              <div className=' '>
                <img src={item.image} alt="" style={{ height: '80px', weight: '80px' }} />

              </div>
              <div className='m-5 w-100 mt-4'>
                <FontAwesomeIcon style={{ color: 'red', marginRight: '300px' }} icon={faTrash} onClick={() => { dispatch(deleteFromCart(item)) }} />
              </div>


            </div>
          })}
        </div>

        <div className="col-md-4 mt-5 ">
          <h2 style={{ fontSize: '28px', color: 'red', marginBottom: '25px' }}>
            Total Price : {subtotal}  Dinar
          </h2>
          {currentUser && <Checkout subtotal={subtotal} />}
          {!currentUser && <p>Please log in to checkout</p>}

        </div>
      </div>
    </div>
  )
}

export default Cartscreen