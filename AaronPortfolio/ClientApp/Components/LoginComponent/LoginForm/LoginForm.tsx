import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AuthService from '../../../Services/AuthService';
import { ILoginModel }from '../../../Models/login.model';



export class LoginForm extends React.Component {

    constructor(props:any){
        super(props);
        
    }
    private AuthService: AuthService = new AuthService();
    user:ILoginModel = new ILoginModel();

    loginUser = (e:any) =>{
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


    render() {
        return (
            <div className="row about-row">
                <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 contact-col ">
                    <form onSubmit={this.loginUser} className="form-horizontal ng-pristine ng-valid">
                        <fieldset>
                            <div className="form-group">
                                <div className="ui-input-group">
                                    <input type="text" ref={(input: any) => this.user.Email = input} className="form-control email" placeholder="Email" id="email" required/>
                                    <span className="input-bar"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="ui-input-group">
                                    <input type="text" ref={(input: any) => this.user.Password = input} className="form-control" placeholder="Password" required/>
                                    <span className="input-bar"></span>
                                </div>
                            </div>
                        </fieldset>
                        <div className="card-action no-border text-right"> <Link to="/" className="color-primary">Sign in</Link> </div>
                        <span className="divider-h"></span><a href="#/page/forgot-password">Forgot your password?</a>
                    </form>
                </div>
            </div>

        )
    }
}