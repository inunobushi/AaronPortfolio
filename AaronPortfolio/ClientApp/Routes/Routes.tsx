import * as React from 'react';
import { BrowserRouter, Route,  Switch, HashRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { HomeComponent } from '../Components/HomeComponent/HomeComponent';
import { AboutComponent } from '../Components/AboutComponent/AboutComponent';
import { WorkComponent } from '../Components/WorkComponent/WorkComponent';
import { LoginComponent } from '../Components/LoginComponent/LoginComponent';
import { ScheduleComponent } from '../Components/ScheduleComponent/ScheduleComponent';
import { ContactComponent } from '../Components/ContactComponent/ContactComponent';
import { RegistrationComponent } from '../Components/RegistrationComponent/RegistrationComponent';
import { WebError } from '../Components/ErrorComponent/Error';

import PrivateRoute from '../Services/AnonymousRoute';

export const App = (props:any) => {
        const width = window.innerWidth;
        const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
        return (

        <BrowserRouter basename={ baseUrl }>
                <Switch>
                    <Route exact path="/" render={()=> <HomeComponent/>}/>
                    <Route path="/About" render={()=> <AboutComponent/>}/>
                    <Route path="/Work" render={()=> <WorkComponent/>}/>
                    <Route path="/Login" render={()=> <LoginComponent/>}/>
                    <Route exact path="/" render={()=> <HomeComponent/>}/>
                    <PrivateRoute path="/Schedule" component={ScheduleComponent}/>
                    <Route path="/Registration" render={()=><RegistrationComponent/>}/>
                    <Route path="/Contact" render={()=> <ContactComponent/>}/>
                    <Route component={()=> <WebError/>}/>
                </Switch>
        </BrowserRouter>
        )
}

export default App;
