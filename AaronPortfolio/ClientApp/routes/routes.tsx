import * as React from 'react';
import { Route,  Switch } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import { Home } from '../components/HomeComponent/Home';
import { NavMenu } from '../components/NavbarComponent/NavMenu';


export const routes = 
    
        <div className="app">
            <NavMenu/>

            <Switch>
                <Route exact path="/" render={()=> <Home/>}/>
            </Switch>


        </div>

    