import axios from 'axios';

const Contact = (e: any) => {

    e.preventDefault();
    axios.post('/contact', {
        FirstName: this.contactForm.FirstName['value'],
        LastName: this.contactForm.LastName['value'],
        Email: this.contactForm.Email['value'],
        Subject: this.contactForm.Subject['value'],
        Message: this.contactForm.Message['value']
    }).then((data: any) => {
        this.contactForm.FirstName['value'] = '';
        this.contactForm.LastName['value'] = '';
        this.contactForm.Email['value'] = '';
        this.contactForm.Subject['value'] = '';
        this.contactForm.Message['value'] = '';
    })
}

export default (Contact);