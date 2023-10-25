import React from 'react'
import { useState } from 'react'
import{useSelector,useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addToCart } from '../actions/cartActions';

function Pizza({ pizza }) {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState("small")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlequantity = (e) => {
        setQuantity(e.target.value)
    }
    const handleVarient = (e) => {
        setVarient(e.target.value)
    }
    const dispatch=useDispatch()

    function addtocart(){
        dispatch(addToCart(pizza,quantity,varient))
    }

    return (
        <div>
              
     
        <div className='m-6 shadow-lg p-4 mb-3 bg-white rounded'>
        
            <div onClick={handleShow}>
                <h1 style={{ fontWeight: '700' , color:'green'}}>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" alt="img" />
            </div>

            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>varients</p>
                    {pizza.varients.length > 0 ? (
    <select value={varient} onChange={handleVarient}>
        {pizza.varients.map(varient => {
            return <option key={varient} value={varient}>{varient}</option>
        })}
    </select>
): (
    <select value={varient} onChange={handleVarient}>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
    </select>
)}
                </div>
                <div className='w-100 m-1'>
                    <p >Quantity</p>
                    <select className='form-contol' key={quantity} value={quantity} onChange={handlequantity}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-2' style={{ color: 'red' }}>Price: {pizza.prices[0][varient] * quantity}D</h1></div>
                <div className=' m-1 w-100'>
                    <button className='btn' onClick={addtocart}>Add to cart</button>
                </div>
            </div>
            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="text-center">
                    <img className="img-fluid" src={pizza.image} alt="" style={{height:'400px'}}></img>
                    </div>
                    <p>{pizza.description}</p>
                    <p class="text-center" style={{color:'red'}}>Order yours Now !</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button className='btn' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>

    )
}

export default Pizza