import axios from 'axios';

const Contact = (e: any, contactForm: any) => {

    e.preventDefault();
    axios.post('api/account/contact/', this.contactForm, { headers: { 'Content-Type': 'application/json' } })
    .then((data: any) => {
    })
}

export default (Contact);

// {
//     FirstName: this.contactForm.FirstName['value'],
//     LastName: this.contactForm.LastName['value'],
//     Email: this.contactForm.Email['value'],
//     Subject: this.contactForm.Subject['value'],
//     Message: this.contactForm.Message['value']
// }

// {
//     this.contactForm.FirstName['value'] = '';
//     this.contactForm.LastName['value'] = '';
//     this.contactForm.Email['value'] = '';
//     this.contactForm.Subject['value'] = '';
//     this.contactForm.Message['value'] = '';
// }