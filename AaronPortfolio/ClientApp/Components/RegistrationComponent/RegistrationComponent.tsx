import * as React from 'react';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import RegistrationFormComponent from './RegistrationFormComponent/RegistrationFormComponent';
import { RegistrationHeaderComponent } from './RegistrationHeader/RegistrationHeader';
import { CopyRightComponent } from '../CopyrightComponent/CopyrightComponent';



export class RegistrationComponent extends React.Component {
    render() {
        return (
            <div className="app" id="main">
                <NavbarComponent />
                <div className="main-page-content">
                    <div id="reg">
                        <div id="reg-content">
                            <div className="reg-grid">
                                <div className="reg-form-details wow fadeIn">
                                    <div className="container">
                                        {/*<!-- ================================ Registration =============================== -->*/}
                                        {/*<!-- Registration Intro Section -->*/}
                                        <RegistrationHeaderComponent />
                                        {/*<!-- Registration Intro Section End-->*/}
                                        {/*<!-- Registration Section -->*/}
                                        <RegistrationFormComponent />
                                        {/*<!-- Registration Section End-->*/}
                                    </div>{/*<!-- end container -->*/}
                                </div>{/*<!-- end reg-form-details -->*/}
                                <CopyRightComponent />{/*<!-- end copyright-details -->*/}
                            </div>{/*<!-- end contact-grid -->*/}
                        </div>{/*<!-- end reg-content -->*/}
                    </div>
                </div>
            </div>
        )
    }
}