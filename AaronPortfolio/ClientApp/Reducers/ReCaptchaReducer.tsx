import { UPDATE_RECAPTCHA, VERIFY_USER } from '../Constants/Constants'

const initialState = {
    currentReCaptcha: null
}


export default (state = initialState, action) => {
    switch(action.type) {
        case VERIFY_USER:
            return { ...state, currentReCaptcha: action.payload.data}
        case UPDATE_RECAPTCHA:
            return {...state, [action.field]: action.payload}
        default: 
            return state
    }
}
