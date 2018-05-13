import * as React from 'react';
import {NavbarComponent} from '../NavbarComponent/NavbarComponent';
import {RegistrationFormComponent} from './RegistrationForm/RegistrationForm';
import {RegistrationHeaderComponent} from './RegistrationHeader/RegistrationHeader';
import { CopyRightComponent } from '../CopyrightComponent/CopyrightComponent';



export class RegistrationComponent extends React.Component{
    render() {
        return( 
        <div>
            <NavbarComponent/>
            {/*<!-- Login Section -->*/}
            <RegistrationHeaderComponent/>
            {/*<!-- Intro Section End-->*/}
          
            {/*<!-- Login Section -->*/}
            <RegistrationFormComponent/>
            {/*<!-- End Login Section -->*/}
            <CopyRightComponent/>
        </div>
        )
    }
}