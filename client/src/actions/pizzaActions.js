import axios from "axios"
//Whenever this function is called , the req is sent to the reducer
//getallpizzas is an action that handle that 3 funnctions req/succuess/failure 
export const getAllPizzas = () => async dispatch => {
  dispatch({ type: 'GET_PIZZAS_REQUEST' })
  try {
    const response = await axios.get('/api/pizzas/getAllpizzas')
    console.log(response)
    //bsh thotelna data f store
    dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data })


  } catch (error) {
    dispatch({ type: 'GET_PIZZAS_FAILED', payload: error.response.data })

  }
}

export const deletePizza = (pizzaId) => async dispatch => {
  dispatch({ type: 'DELETE_PIZZA_REQUEST' })
  try {
    //send the data to backend
    const response = await axios.delete(`/api/pizzas/${pizzaId}`)
    console.log(response)
    dispatch({ type: 'DELETE_PIZZA_SUCCESS', payload: pizzaId })
    window.location.href = '/pizzaslist'
  } catch (error) {
    dispatch({ type: 'DELETE_PIZZA_FAILED', payload: error })

  }
};

export const addPizza = (pizza) => async dispatch => {
  dispatch({ type: 'ADD_PIZZA_REQUEST' })
  try {
    //send the data to backend 
    const response = await axios.post(`/api/pizzas/addpizza`, { pizza })
    console.log(response)
    dispatch({ type: 'ADD_PIZZA_SUCCESS', pizza: response.data })
  } catch (error) {
    dispatch({ type: 'ADD_PIZZA_FAILED', payload: error })
  }
};

export const getPizzaDetails = (pizzaId) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_PIZZA_DETAILS_REQUEST' });
    const { data } = await axios.get(`/api/pizzas/${pizzaId}`);
    dispatch({ type: 'GET_PIZZA_DETAILS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GET_PIZZA_DETAILS_FAIL', payload: error.message });
  }
};

export const updatePizza = (pizza) => async (dispatch) => {
  dispatch({ type: 'UPDATE_PIZZA_REQUEST' })
  try {
    const response = await axios.put(`/api/pizzas/pizzaslist/${pizza._id}`, { ...pizza })
    console.log(response)
    dispatch({
      type: 'UPDATE_PIZZA_SUCCESS',
      payload: response.data.pizza
    });
    window.location.href = '/pizzaslist'
  } catch (error) {
    dispatch({ type: 'UPDATE_PIZZA_FAILED', payload: error })
  }
};


