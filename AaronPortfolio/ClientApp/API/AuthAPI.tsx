import axios from 'axios';

const Registration = (user) => {
    axios.post('api/account/register/', this.user, { headers: { 'Content-Type': 'application/json' } }).then(res => {
        if (res.status === 200) {
            console.log(res);
        } else {
            console.log(res);
        }
    }).catch(err => {
        console.log(err);
        console.log('not logging in');
    })
}

export default (Registration);