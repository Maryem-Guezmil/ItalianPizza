import React from 'react'
import { useState } from 'react';
import NavbarAdmin from '../components/NavbarAdmin'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllPizzas, deletePizza,updatePizza } from '../actions/pizzaActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export default function PizzasList() {

    const dispatch = useDispatch();

    const [pizzaToUpdate, setPizzaToUpdate] = useState(null);
    const [name, setName] = useState('');
    const [smallPrice, setSmallPrice] = useState('');
    const [mediumPrice, setMediumPrice] = useState('');
    const [largePrice, setLargePrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');

    const pizzas = useSelector(state => state.getAllPizzasReducer.pizzas);
    const navigate = useNavigate();

    const handleOnePizza = (pizza) => {
        setName(pizza.name);
        setSmallPrice(pizza.prices[0].small);
        setMediumPrice(pizza.prices[0].medium);
        setLargePrice(pizza.prices[0].large);
        setImage(pizza.image);
        setDescription(pizza.description);
        setId(pizza._id);
        setPizzaToUpdate(pizza);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePizza({
          _id: id,
          name,
          prices: {
            small: smallPrice,
            medium: mediumPrice,
            large: largePrice
          },
          image,
          description
        }));
        navigate('/pizzaslist');
      };
    const handleDelete = (pizzaId) => {
        dispatch(deletePizza(pizzaId))
    }
    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    return (
        <div>
            <h2 >Admin Panel</h2>
            <NavbarAdmin />
            <div>
                <h1 className="title mt-3 " style={{ textAlign: "left", marginLeft: "150px" }}>Modify a Specific Pizza</h1>
                <form onSubmit={handleSubmit}>
                    <div >
                        <div className="pizza-modify">
                            <input
                                className="input-add"
                                name="name"
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <br />
                            <input
                                className="input-add"
                                name="small varient price"
                                type="number"
                                placeholder="small varient price"
                                value={smallPrice}
                                onChange={(e) => setSmallPrice(e.target.value)}
                            />
                            <br />
                            <input
                                className="input-add"
                                name="medium varient price"
                                type="number"
                                placeholder="medium varient price"
                                value={mediumPrice}
                                onChange={(e) => setMediumPrice(e.target.value)}
                            /> <input
                                className="input-add"
                                name="large varient price"
                                type="number"
                                placeholder="large varient price"
                                value={largePrice}
                                onChange={(e) => setLargePrice(e.target.value)} />
                            <br />
                            <input
                                className="input-add"
                                name="image"
                                type="text"
                                placeholder="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <br />
                            <input
                                className="input-add"
                                name="description"
                                type="text"
                                placeholder="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <button className="btn m-4" type="submit" >
                            UPDATE PIZZA
                        </button>
                    </div>
                </form>

            </div>

            <h1 className='title m-4'>Pizzas List</h1>
            <div className='row justify-content-center mx-5 ml-5'>
                <table className='table'>
                    <thead >
                        <tr className='table-head '>
                            <th>Name</th>
                            <th>small price</th>
                            <th>medium price</th>
                            <th>large price</th>
                            <th>description</th>
                            <th>image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pizzas && pizzas.length > 0 && pizzas.map(pizza => (
                            <tr key={pizza._id} className="table-body">
                                <td>{pizza.name}</td>
                                <td>{pizza.prices && pizza.prices.length > 0 && pizza.prices[0].small}</td>
                                <td>{pizza.prices && pizza.prices.length > 0 && pizza.prices[0].medium}</td>
                                <td>{pizza.prices && pizza.prices.length > 0 && pizza.prices[0].large}</td>
                                <td>{pizza.description}</td>
                                <td>
                                    <img src={pizza.image} alt="" style={{ height: '80px', weight: '80px' }} />
                                </td>
                                <td style={{ display: 'flex' }}>
                                    <FontAwesomeIcon style={{ color: 'blue', marginRight: '20px' }} icon={faEdit} onClick={() => handleOnePizza(pizza)} />
                                    <FontAwesomeIcon style={{ color: 'red' }} icon={faTrash} onClick={() => handleDelete(pizza._id)} />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </div>
    )

}

/*
     const handleEdit = (id) => {
         // get the pizza object from the pizzas array using its id
         //const pizza = pizzas.find(pizza => pizza._id === pizzaId);
        
                 // redirect to the modifyPizza component and pass the pizza object as a prop
                 const navigate = useNavigate();
                 navigate('/modifypizza', { state: { pizza } });
         dispatch(updatePizza(id));
 */