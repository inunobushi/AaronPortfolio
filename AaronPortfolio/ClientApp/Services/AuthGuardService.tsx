import AuthService from './AuthService';



export default class AuthGuard {
    private authService:AuthService = new AuthService();

    
    get isUserLoggedIn(){
        return this.authService.getIsLoggedIn();
    }
}