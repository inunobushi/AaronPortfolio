import { LOGIN_USER, UPDATE_FIELD_LOGIN } from '../Contants/Constants'

const initialState = {
    currentLoginForm: null
}


export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, currentUser: action.payload.data}
        case UPDATE_FIELD_LOGIN:
            return {...state, [action.field]: action.payload}
        default: 
            return state
    }
}