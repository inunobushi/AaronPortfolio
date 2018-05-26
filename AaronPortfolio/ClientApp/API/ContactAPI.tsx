import axios from 'axios';

const Contact = (contactForm: any) => {
    return axios.post('api/contact/contactdata', contactForm, { headers: { 'Content-Type': 'application/json' } })
}

export default {Contact};

