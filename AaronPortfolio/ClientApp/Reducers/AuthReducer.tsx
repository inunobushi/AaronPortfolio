import { UPDATE_FIELD_AUTH, REG_USER } from '../Contants/Constants'

const initialState = {
    currentUser: null
}


export default (state = initialState, action) => {
    switch(action.type) {
        case REG_USER:
            return { ...state, currentUser: action.payload.data}
        case UPDATE_FIELD_AUTH:
            return {...state, [action.field]: action.payload}
        default: 
            return state
    }

}