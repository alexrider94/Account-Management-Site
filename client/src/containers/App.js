import React from 'react';
import { Header, Footer, LoginPage, RegisterPage } from '../components';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact={true} component={LoginPage}></Route>
                        <Route path='/login' exact={true} component={LoginPage}></Route>
                        <Route path='/register' exact={true} component={RegisterPage}></Route>
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>

        );
    }
}

export default App;