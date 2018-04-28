import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CSS/reva-default-color.css';
import './CSS/reva-main.css';
import './CSS/lamisa-animate.css';
import './CSS/lamisa-animate-header.css';
import './CSS/lamisa-default.css';
import './CSS/lasima-jquerysctipttop.css';
import './CSS/_flaticon.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from './Routes/Routes';
 



function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    ReactDOM.render(
        <AppContainer>
                <App/>
        </AppContainer>,
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
