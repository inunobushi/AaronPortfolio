﻿import * as React from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import AuthService from '../../services/authService';
import { LoginModel }from '../../Models/login.model';

export class LoginComponent extends React.Component{

            constructor(props:any){
                super(props);
                
            }
            private authService: AuthService = new AuthService();
            user:LoginModel = new LoginModel();

            loginUser = (e:any) =>{
                e.preventDefault();
                this.authService.login({
                    Email:this.user.Email['value'],
                    Password:this.user.Password['value']
                })
                .then((data: any)=> {
                        console.log(data);
                        this.authService.setIsLoggedIn(data['token']);
                        window.location.pathname = '/'
                    
                }).catch(err => {
                    console.log('err');
                })
            }

    render(){
            return(
                <div id="login" className="ptb ptb-xs-40 page-signin">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-body">
                                    <div className="body-inner">
                                        <div className="card bg-white">
                                            <div className="card-content">
                                                <section className="logo text-center">
                                                    <h2>Login</h2>
                                                </section>
                                                <form onSubmit={this.loginUser} className="form-horizontal ng-pristine ng-valid">
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <div className="ui-input-group">
                                                                <input type="text" required ref={(input:any)=>this.user.Email = input} className="form-control" />
                                                                <span className="input-bar"></span>
                                                                <label>Email</label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="ui-input-group">
                                                                <input type="text" required ref={(input:any) => this.user.Password = input} className="form-control" />
                                                                <span className="input-bar"></span>
                                                                <label>Password</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card-action no-border text-right"> <a href="#/" className="color-primary">Sign in</a> </div>
                                    </div>
                                    <div className="additional-info"> <a href="#/page/signup">Register</a><span className="divider-h"></span><a href="#/page/forgot-password">Forgot your password?</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        }

}