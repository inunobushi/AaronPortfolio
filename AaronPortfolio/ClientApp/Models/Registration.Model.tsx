export class RegistrationModel {
    constructor(
        FirstName: string,
        LastName: string,
        Username: string,
        Email:string,
        Password:string,
        PasswordConfirm: string){
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.Username = Username;
            this.Email = Email;
            this.Password = Password;
            this.PasswordConfirm = PasswordConfirm;
    }
    FirstName: string;
    LastName: string;
    Username: string;
    Email:string;
    Password:string;
    PasswordConfirm: string;  
}