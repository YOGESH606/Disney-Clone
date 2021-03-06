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
    console.log(process.env);
    return (
        <>
            <Router>
                <GlobalStyle />
                <Header />
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/detail/:id" component={Detail} />
                    <Route exact path="/home" component={Home} />
                       
                </Switch>
            </Router>
        </>
    )
}
<GlobalStyle />
