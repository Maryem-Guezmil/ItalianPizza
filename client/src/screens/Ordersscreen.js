import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function Ordersscreen() {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {
        dispatch(getUserOrders())

    }, [dispatch])



    return (
        <div>
            <h2 style={{ fontSize: '35px' }}>My Orders </h2>
            <hr />
            <div className="row justify-content-center" >
                {loading && <Loading />}
                {error && <Error error='something went wrong' />}
                {orders && orders.map(order => {
                    return <div className="col-md-8 m-2" style={{ backgroundColor: 'red', color: 'white' }}>
                        <div className="flex-container">
                            <div className='text-left w-100 m-1'>

                                <h1>Items</h1>
                                <hr />
                                {order.orderItems.map(item => {
                                    return <div>
                                        <p>{item.name} [{item.varient}] * {item.quantity}</p>
                                    </div>
                                })}
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h1 style={{ fontsize: '10px' }}>Address</h1>
                                <hr />
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h1 style={{ fontsize: '10px' }}>Order Info</h1>
                                <hr />
                                <p>Order Amount :{order.orderAmount} dt</p>
                                <p>Date : {order.createdAt.substring(0, 10)}</p>
                                <p>The delivery : {order.isDelivered?" is delivered" : " not delivered yet"}</p>
                            </div>
                        </div>


                    </div>
                })}
            </div>

        </div>
    )
}
