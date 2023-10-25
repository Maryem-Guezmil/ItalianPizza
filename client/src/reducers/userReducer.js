export const registerUserReducer = (state = {}, action) => {

    switch (action.type) {
        case 'USER_RESGISTER_REQUEST': return {
            loading: true
        }
        case 'USER_RESGISTER_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'USER_RESGISTER_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state


    }
}
const initState = {
    loggedin: false
};
export const loginUserReducer = (state = initState, action) => {

    switch (action.type) {
        case 'USER_LOGIN_REQUEST': return {
            loading: true,
            ...state
        }
        case 'USER_LOGIN_SUCCESS': return {
            loading: false,
            success: true,
            currentUser: action.payload,
            loggedin: true 
            
        }
        
        case 'USER_LOGIN_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state

    }
}

export const UsersReducer = (state = { users: [] }, action) => {

    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;
    }
}

const initialState = {

    error: null
};
export const DeleteUserReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'DELETE_USER_REQUEST':
            return {
                ...state,

                error: null,
            };
        case 'DELETE_USER_SUCCESS':
            return {
                ...state,

                error: null,
            };
        case 'DELETE_USER_FAILED':
            return {
                ...state,

                error: action.error,
            };
        default:
            return state;
    }
}



