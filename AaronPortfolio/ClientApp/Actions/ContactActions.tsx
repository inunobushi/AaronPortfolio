import { CONTACT_FORM} from '../Constants/Constants';
import ContactAPI from '../API/ContactAPI';

const ContactForm = ( dispatch: any, contactForm: any) => {
    // return dispatch => { 
        ContactAPI.Contact(contactForm).then(res => {
            dispatch({type: CONTACT_FORM, payload: res})
        })
    // }
}

export default ContactForm;