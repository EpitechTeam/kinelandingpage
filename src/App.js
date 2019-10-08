import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './pages/home/home';
import Tarifs from './pages/tarifs/tarifs';
import './App.css';
import MainNav from "./components/nav";
import {utils} from "./utils";
import Contact from "./pages/contact";
import Checkout from "./pages/checkout";

const style = {
    color: utils.colors.mainBlack
};

const content = {
    marginTop: utils.navHeight,
};

function App() {
    return (
        <div>
            <MainNav/>
            <Router>
                <div style={style}>
                    <div style={content}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/tarifs" component={Tarifs}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/checkout" component={Checkout}/>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
