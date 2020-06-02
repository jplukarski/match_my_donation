import React from 'react';
import {AuthProvider} from './Auth';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/Home'
import AddDonation from './pages/AddDonation'
import './App.css';

export default function App(){
    return(
        <>
            <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/add_new_donation' component={AddDonation}/>
                </Switch>
            </Router>
            </AuthProvider>
        </>
    )
}