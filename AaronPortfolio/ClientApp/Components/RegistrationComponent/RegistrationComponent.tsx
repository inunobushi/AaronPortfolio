import * as React from 'react';
import {RegistrationFormComponent} from './RegistrationForm/RegistrationForm';
import {RegistrationHeaderComponent} from './RegistrationHeader/RegistrationHeader';



export class RegistrationComponent extends React.Component{
    render() {
        return( 
        <div>
          {/*<!-- Login Section -->*/}*/}
          <RegistrationHeaderComponent/>
          {/*<!-- Intro Section End-->*/}
          
           {/*<!-- Login Section -->*/}
           <RegistrationFormComponent/>
           {/*<!-- End Login Section -->*/}
        </div>
        )
    }
}