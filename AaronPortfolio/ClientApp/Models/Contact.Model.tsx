export class ContactModel {

    constructor(
        FirstName: string,
    LastName: string,
    Email: string,
    Subject: string,
    Message: string
    ){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Subject = Subject;
        this.Message = Message;

    }
    FirstName: string;
    LastName: string;
    Email: string;
    Subject: string;
    Message: string;
}