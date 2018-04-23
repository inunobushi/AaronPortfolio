import * as React from 'react';
import { NavMenu } from './NavMenu/NavMenu';
import { Toggle } from './Toggle/Toggle';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import popper from 'popper.js';



export class NavMenuComponent extends React.Component {

    constructor(props: any){
        super(props);
    }
     render() {
        return(
            <div>
                <NavMenu/>
                <Toggle/>
            </div>
            
        )
    }
}
