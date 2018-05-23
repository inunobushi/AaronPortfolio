import { UPDATE_FIELD_CONTACT, CONTACT_FORM } from '../Contants/Constants'

const initialState = {
    currentContactForm: null
}


export default (state = initialState, action) => {
    switch(action.type) {
        case CONTACT_FORM:
            return { ...state, currentContactForm: action.payload.data}
        case UPDATE_FIELD_CONTACT:
            return {...state, [action.field]: action.payload}
        default: 
            return state
    }
}