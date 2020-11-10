import React from 'react';
import { Footer, LoginPage, RegisterPage, DashBoardPage } from '../components';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { UserProvider } from '../contexts/UserContext';

export default function App() {
    const user = { token: "" };

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <UserProvider value={user}>
                        <Route path='/' exact={true} component={LoginPage}></Route>
                        <Route path='/login' exact={true} component={LoginPage}></Route>
                        <Route path='/dashboard' exact={true} component={DashBoardPage}></Route>
                        <Route path='/register' exact={true} component={RegisterPage}></Route>
                        <Redirect path="*" to="/" />
                    </UserProvider>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>

    );
}
