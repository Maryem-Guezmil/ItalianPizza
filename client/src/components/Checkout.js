import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderAction'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'

function Checkout({ subtotal }) {
    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }
    return (
        <div>

            {loading && (<Loading />)}
            {success && (<Success success='Order Placed Successfully' />)}
            {error && (<Error error='something went wrong' />)}
             
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                billingAddress={true}
                token={tokenHandler}
                stripeKey='pk_test_51MUtDwLQFqE1oBaQNd24AWc4XpwPJmGYyoUZ2jIK2fenZEck1Z1vYW5p4bEe7rP84FEAgaHLhSOl2jWq1US7ek6G00LglonkPz'
                currency='EUR'
            >
                <button className='btn'>Pay Now</button>

            </StripeCheckout>
        </div>
    )
}

export default Checkout