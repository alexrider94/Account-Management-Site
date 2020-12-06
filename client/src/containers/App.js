import React from 'react';
import { Footer, LoginPage, RegisterPage, DashBoardPage } from '../components';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { UserContext } from '../contexts/Context';
import { userInitialState, userReducer } from '../reducer/UserReducer';
export default function App() {
    const [state, dispatch] = React.useReducer(userReducer, userInitialState)
    if (localStorage.getItem('token')) {
        state.isAuthenticated = true;
    }
    return (
        <BrowserRouter>
            <div>
                <UserContext.Provider value={{ state, dispatch }}>
                    <Switch>
                        <Route path='/' exact={true} render={() => state.isAuthenticated ? (<DashBoardPage></DashBoardPage>) : (<LoginPage></LoginPage>)}></Route>
                        <Route path='/login' exact={true} component={LoginPage}></Route>
                        <Route path='/register' exact={true} component={RegisterPage}></Route>
                    </Switch>
                    <Footer />
                </UserContext.Provider>
            </div>
        </BrowserRouter>
    );
}
