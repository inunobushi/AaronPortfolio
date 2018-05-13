import * as React from 'react';
import BigCalendar from 'react-big-calendar'

import {NavbarComponent} from '../NavbarComponent/NavbarComponent';

export class ScheduleComponent extends React.Component{
    render() {
        return( 
            <div className="app">
                <NavbarComponent />
                <BigCalendar />
            </div>

        )
    }
}