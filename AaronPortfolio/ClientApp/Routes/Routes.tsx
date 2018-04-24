import * as React from 'react';
import { Route,  Switch } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { HomeComponent } from '../Components/HomeComponent/HomeComponent';
import { AboutComponent } from '../Components/AboutComponent/AboutComponent';
import { WorkComponent } from '../Components/WorkComponent/WorkComponent';
import { LoginComponent } from '../Components/LoginComponent/LoginComponent';
import { ScheduleComponent } from '../Components/ScheduleComponent/ScheduleComponent';
import { ContactComponent } from '../Components/ContactComponent/ContactComponent';
import { RegistrationComponent } from '../Components/RegistrationComponent/RegistrationComponent';
import { NavMenuComponent } from '../Components/NavMenuComponent/NavMenuComponent';
import { NavbarComponent } from '../Components/NavbarComponent/NavbarComponent';

import PrivateRoute from '../Services/AnonymousRoute';


export const routes = (props:any) => {
        const width = window.innerWidth;
        return (
            <div className="app">
                {
                   width < 768 && <NavMenuComponent/>
                }

                {
                   width > 768 && <NavbarComponent/>
                }

                <Switch>
                    <Route exact path="/" render={()=> <HomeComponent/>}/>
                    <Route path="/About" render={()=> <AboutComponent/>}/>
                    <Route path="/Work" render={()=> <WorkComponent/>}/>
                    <Route path="/Login" render={()=> <LoginComponent/>}/>
                    <Route exact path="/" render={()=> <HomeComponent/>}/>
                    <PrivateRoute path="/Schedule" component={ScheduleComponent}/>
                    <Route path="/Registration" render={()=><RegistrationComponent/>}/>
                    <Route path="/Contact" render={()=> <ContactComponent/>}/>
                </Switch>


            </div>
        )
}
