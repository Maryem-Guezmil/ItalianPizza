const initialState = {
    searchTerm: '',
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            console.log(" set search req")
            return {
                searchTerm: action.payload,
                ...state,
            }

        case 'CLEAR_SEARCH_TERM':
            console.log("CLEAR_SEARCH_TERM success")
            return {
                ...state,
                searchTerm: ''
            }
        default: return state

    }
}