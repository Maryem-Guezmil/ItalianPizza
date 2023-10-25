export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case 'GET_PIZZAS_REQUEST':
            console.log(" get pizzass req")
            return {
                loading: true,
                ...state,
            }

        case 'GET_PIZZAS_SUCCESS':
            console.log("get ppizzas succ")
            return {
                loading: false,
                pizzas: action.payload
            }

        case 'GET_PIZZAS_FAILED':
            return {
                error: action.payload
            }

        default: return state

    }
}
//details reducer
const iState = {
    pizza: {},
    loading: false,
    error: null,
  };
 export const pizzaDetailsReducer = (state = iState, action) => {
    switch (action.type) {
      case 'GET_PIZZA_DETAILS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_PIZZA_DETAILS_SUCCESS':
        return {
          ...state,
          pizza: action.payload,
          loading: false,
          error: null,
        };
      case 'GET_PIZZA_DETAILS_FAIL':
        return {
          ...state,
          pizza: {},
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


const initialStateOfPizza = {
    pizzas: [],
    pizzaDetails: null,
    loading: false,
    error: null
};
const initial = {
    loading: false,
    pizza: null,
    error: null
  }
  
 export const updatePizzaReducer = (state = initial, action) => {
    console.log('0');
    switch (action.type) {
      case 'UPDATE_PIZZA_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        }
      case 'UPDATE_PIZZA_SUCCESS':
        return {
          ...state,
          loading: false,
          pizza: action.payload,
          error: null
        }
      case 'UPDATE_PIZZA_FAILED':
        return {
          ...state,
          loading: false,
          pizza: null,
          error: action.payload
        }
      default:
        return state;
    }
  }
  

const initialState = {
    error: null
};
export const DeletePizzaReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'DELETE_PIZZA_REQUEST':
            return {
                ...state,
                error: null,
            };
        case 'DELETE_PIZZA_SUCCESS':
            return {
                ...state,
                error: null,
            };
        case 'DELETE_PIZZA_FAILED':
            return {
                ...state,
                error: action.error,
            };


        default:
            return state;
    }
}


export const AddPizzaReducer = (state = { pizzas: [] }, action) => {

    switch (action.type) {
        case 'ADD_PIZZA_REQUEST':
            return {
                ...state
            };
        case 'ADD_PIZZA_SUCCESS':
            return {
                ...state,
                pizzas: [...state.pizzas, action.payload]
            }
                ;
        case 'ADD_PIZZA_FAILED':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
