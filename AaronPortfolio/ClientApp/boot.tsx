import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './CSS/site.css';
import './CSS/color.css';
import './CSS/lamisa-animate.css';
import './CSS/lamisa-animate-header.css';
import './CSS/_flaticon.less';
import './CSS/font-awesome.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './Routes/Routes';
import Store from './Store/store';
 



function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(
        <Provider store={Store}>
            <AppContainer>
                <App/>
            </AppContainer>
        </Provider>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./Routes/Routes', () => {
{/*       routes = require<typeof RoutesModule>('./Routes/Routes').App;*/}
        renderApp();
    });
}
