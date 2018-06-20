import { UPDATE_FIELD_AUTH, REG_USER, LOGIN_USER, LOGOUT_USER } from '../Constants/Constants'

const initialState = {
    currentUser: null
}


export default (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case REG_USER:
        case LOGIN_USER:
            return { ...state, currentUser: action.payload.data || action.payload}
        case LOGOUT_USER:
            return initialState
        case UPDATE_FIELD_AUTH:
            return {...state, [action.field]: action.payload}
        default: 
            return state
    }

}