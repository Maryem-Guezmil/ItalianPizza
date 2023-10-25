import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { addPizza } from '../actions/pizzaActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function AddPizza() {

    const [name, setname] = useState('')
    const [small, setsmall] = useState('')
    const [medium, setmedium] = useState('')
    const [large, setlarge] = useState('')
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const variants =[ {small},{medium},{large}]
       
        const prices = {
            small: small,
            medium: medium,
            large: large
        };
        const pizza = {
            name, image, description, variants, prices
        };
        dispatch(addPizza(pizza))
        window.location.href = '/addpizza'
    }

    return (
        <div>
            <h2 >Admin Panel</h2>
            <NavbarAdmin />
            <h2 className='title mt-4 '>Add Pizza</h2>
            <form onSubmit={handleSubmit}>
                <div className='pizza-add' style={{
                    width: '1200px',marginLeft:'160px'
                }}>
                    <input className='input-add' name='name' type='text' placeholder="name" value={name} onChange={e => setname(e.target.value)} /> <br />
                    <input className='input-add' name='small' type='number' placeholder="small varient price" value={small} onChange={e => setsmall(e.target.value)} /><br />
                    <input className='input-add' name='medium' type='number' placeholder="medium varient price" value={medium} onChange={e => setmedium(e.target.value)} /><br />
                    <input className='input-add' name='large' type='number' placeholder="large varient price" value={large} onChange={e => setlarge(e.target.value)} /><br />
                    <input className='input-add' name='description' type='text' placeholder="description" value={description} onChange={e => setdescription(e.target.value)} /><br />
                    <input className='input-add' name='image' type='text' placeholder="image url" value={image} onChange={e => setimage(e.target.value)} /><br />
                    <button className='btn m-4 ' type='submit'>ADD PIZZA</button>

                </div>
            </form>

        </div>
    )
}
