import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getOrders, updateDeliveryStatus } from '../actions/orderAction'

import { format } from 'date-fns';
export default function OrdersList() {
    const [deliveredOrders, setDeliveredOrders] = useState({});
    //const [delivered, setDelivered] = useState(false);
    const dispatch = useDispatch();
    const orders = useSelector(state => state.getOrdersReducer.orders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const handleDeliverClick = (orderId) => {
        dispatch(updateDeliveryStatus(orderId));
        //setDelivered(true);
        setDeliveredOrders({
            ...deliveredOrders,
            [orderId]: true
        });
    };
    useEffect(() => {
        localStorage.setItem("deliveredOrders", JSON.stringify(deliveredOrders));
    }, [deliveredOrders]);
    return (
        <div>
            <h2 >Admin Panel</h2>
            <NavbarAdmin />
            <h2 className='title m-4'>Orders List</h2>

            <div className='row justify-content-center mx-5 ml-5'>
                <table className='table2'>
                    <thead >
                        <tr className='table-head '>
                            <th>name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.map(order => (
                            <tr key={order._id} className="table-body">
                                <td>{order.name}</td>

                                <td>{order.orderAmount.toLocaleString()} dinar</td>
                                <td>{format(new Date(order.createdAt), 'MM/dd/yyyy hh:mm a')}</td>
                           
                                <td>
                                    {deliveredOrders[order._id] ? (
                                        <h1>Delivered</h1>
                                    ) : (
                                        <button
                                            style={{
                                                backgroundColor: "red",
                                                color: "white",
                                                padding: "10px 20px",
                                                border: "none",
                                            }}
                                            onClick={() => handleDeliverClick(order._id)}
                                        >
                                            Deliver
                                        </button>
                                    )}
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>


        </div>

    )
}
