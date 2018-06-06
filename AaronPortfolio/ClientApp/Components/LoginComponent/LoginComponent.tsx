import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';

import NavbarComponent from '../NavbarComponent/NavbarComponent';
import { CopyRightComponent } from '../CopyrightComponent/CopyrightComponent';
import LoginFormComponent from './LoginFormComponent/LoginFormComponent';

export class LoginComponent extends React.Component {

    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <div className="app" id="main">
                <NavbarComponent />
                <div className="main-page-content">
                    <div id="login" className="ptb ptb-xs-40 page-signin">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="main-body">
                                        <div className="body-inner">
                                            <div className="card bg-white">
                                                <div className="card-content">
                                                    <section className="logo text-center">
                                                        <h2 className="title-header">Login</h2>
                                                        <div className="underline1"></div>
                                                    </section>
                                                    <LoginFormComponent />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="additional-info"> <Link to="/Registration">Signup</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRightComponent />
            </div>
        )
    }

}