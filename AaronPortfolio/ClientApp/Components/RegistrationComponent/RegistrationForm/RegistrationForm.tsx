import * as React from 'react';

import axios from 'axios';
import { RegistrationModel } from '../../../Models/Registration.Model';


export class RegistrationFormComponent extends React.Component{

    constructor(props:any){
        super(props);
        this.register = this.register.bind(this);
    }

   user:RegistrationModel = new RegistrationModel();

    register(e:any){
        console.log(e);
        e.preventDefault();
        axios.post('/users/register', this.user ).then( res => {
            if(res.status === 200) {
                console.log(res);
            } else {
                console.log(res);
            }
        }).catch(err => {
            console.log(err);
            console.log('not logging in');
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
                           <h2>Register</h2>
                         </section>
                         <form onSubmit={this.register} className="form-horizontal ng-pristine ng-valid">
                           <fieldset>
                             <div className="form-group">
                               <div className="ui-input-group">
                                 <input type="text" value={this.user.FirstName} required className="form-control"/>
                                 <span className="input-bar"></span>
                                 <label>First Name</label>
                               </div>
                             </div>
                             <div className="form-group">
                               <div className="ui-input-group">
                                 <input type="text" value={this.user.LastName} required className="form-control"/>
                                 <span className="input-bar"></span>
                                 <label>Last Name</label>
                               </div>
                             </div>
                             <div className="form-group">
                               <div className="ui-input-group">
                                 <input type="text" value={this.user.Email} required  className="form-control"/>
                                 <span className="input-bar"></span>
                                 <label>Your email</label>
                               </div>
                             </div>
                             <div className="form-group">
                               <div className="ui-input-group">
                                 <input type="text" value={this.user.Password} required className="form-control"/>
                                 <span className="input-bar"></span>
                                 <label>Your password </label>
                               </div>
                             </div>
                             <div className="form-group">
                               <div className="ui-input-group">
                                 <input type="text" value={this.user.Password_confirm} required  className="form-control"/>
                                 <span className="input-bar"></span>
                                 <label>Please confirm your password </label>
                               </div>
                             </div>
                             <div className="spacer"></div>
                             <div className="form-group checkbox-field">
                               <label for="check_box" className="text-small">
                                 <input type="checkbox" id="check_box" />
                                 <span className="ion-ios-checkmark-empty22 custom-check"></span> By clicking on sign up, you agree to <a href="javascript:;"><i>terms</i></a> and <a href="javascript:;"><i>privacy policy</i></a></label>
                             </div>
                           </fieldset>
                         </form>
                       </div>
                       <div className="card-action no-border text-right"> <a href="#/page/signin">Login</a><a href="#/" className="color-primary">Sign Up</a> </div>
                     </div>
                   </div>
                 </div>
               </div>
               </div>
             </div>
           </div>
        )
    }
}