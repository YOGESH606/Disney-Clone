import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Detail from './component/Detail';
import Login from './component/Login';
import GlobalStyle from './globalStyles';


export default function App() {
    return (
        <>
            <Router>
                <GlobalStyle/>
                <Header/>
                <Switch>
                    <Route path="/login">
                          <Login/>
                    </Route>
                    <Route path="/detail/:id">
                          <Detail/>
                    </Route>
                    <Route path="/" >
                        <Home />
                    </Route>
                    
                </Switch>
            </Router>
        </>
    )
}
<GlobalStyle />
            