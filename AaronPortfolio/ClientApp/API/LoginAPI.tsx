import AuthService from '../Services/AuthService';

const Login = (e:any) =>{
    e.preventDefault();
    this.AuthService.login({
        Email:this.user.Email['value'],
        Password:this.user.Password['value']
    })
    .then((data: any)=> {
            console.log(data);
            this.AuthService.setIsLoggedIn(data['token']);
            window.location.pathname = '/'
        
    }).catch(err => {
        console.log('err');
    })
}

export default (Login);