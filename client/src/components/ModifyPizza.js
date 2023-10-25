import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePizza, getPizzaDetails } from '../actions/pizzaActions';
import AdminPanelScreen from '../screens/AdminPanelScreen';

export default function ModifyPizza({ match, history }) {
  /*const dispatch = useDispatch();
  const pizzas = useSelector(state => state.getAllPizzasReducer.pizzas);
  const pizza = pizzas.find(p => p._id === match.params.id);

  const [name, setname] = useState('')
  const [small, setsmall] = useState('')
  const [medium, setmedium] = useState('')
  const [large, setlarge] = useState('')
  const [description, setdescription] = useState('')
  const [image, setimage] = useState('')

  //const pizzaDetails = useSelector(state => state.getPizzaDetails)

  useEffect(() => {
    dispatch(getPizzaDetails(match.params.id));
  }, [dispatch, match]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(
      updatePizza({
        _id: match.params.id,
        name,
        small,
        medium,
        image,
        description,
      })
    );
    //history.push('/admin/addpizza');
  };
  /*
    const handleSubmit = e => {
      e.preventDefault();
      const updatedPizza = {
        _id: pizza._id,
        name,
        prices: {
          small,
          medium,
          large
        },
        description,
        image
      };
      dispatch(updatePizza(updatedPizza));
      history.push('/pizzaslist');
    };
  */
  return (
    <div>
      <h1 className="title mt-3 " style={{ textAlign: "left", marginLeft: "150px"}}>Modify a Specific Pizza</h1>
      <form >
        <div >
          <div className="pizza-modify">
            <input
              className="input-add"
              name="name"
              type="text"
              placeholder="name"
            />
            <br />
            <input
              className="input-add"
              name="small varient price"
              type="number"
              placeholder="small varient price"
            />
            <br />
            <input
              className="input-add"
              name="medium varient price"
              type="number"
              placeholder="medium varient price"
            /> <input
              className="input-add"
              name="large varient price"
              type="number"
              placeholder="large varient price"
            />
            <br />
            <input
              className="input-add"
              name="image"
              type="text"
              placeholder="image"
            />
            <br />
            <input
              className="input-add"
              name="description"
              type="text"
              placeholder="description"
            />
          </div>

          <button className="btn m-4" type="submit" >
            UPDATE PIZZA
          </button>
        </div>
      </form>

    </div>
  );
}