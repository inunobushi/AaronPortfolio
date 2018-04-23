import * as React from 'react';
import { Route,  Switch } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { HomeComponent } from '../Components/HomeComponent/HomeComponent';
import { AboutComponent } from '../Components/AboutComponent/AboutComponent';
import { WorkComponent } from '../Components/WorkComponent/WorkComponent';
import { LoginComponent } from '../Components/LoginComponent/LoginComponent';
import { ScheduleComponent } from '../Components/ScheduleComponent/ScheduleComponent';
import { ContactComponent } from '../Components/ContactComponent/ContactComponent';
import { NavMenuComponent } from '../Components/NavMenuComponent/NavMenuComponent';
import { NavbarComponent } from '../Components/NavbarComponent/NavbarComponent';


export const routes = 
    
        <div className="app">
            <NavbarComponent/>

            <Switch>
                <Route exact path="/" render={()=> <HomeComponent/>}/>
                <Route path="/About" render={()=> <AboutComponent/>}/>
                <Route path="/Work" render={()=> <WorkComponent/>}/>
                <Route path="/Login" render={()=> <LoginComponent/>}/>
                <Route path="/Schedule" render={()=> <ScheduleComponent/>}/>
                <Route path="/" render={()=> <HomeComponent/>}/>
                <Route path="/Contact" render={()=> <ContactComponent/>}/>
                
            </Switch>


        </div>

    