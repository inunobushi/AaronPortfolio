import AuthService from './AuthService';



export default class AuthGuard {
    private AuthService:AuthService = new AuthService();

    
    get isUserLoggedIn(){
        return this.AuthService.getIsLoggedIn();
    }
}