import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/navigation/Header/Header';
import JobManagement from './components/JobManagement/JobManagement';
import About from './components/About/About'
import notFound from './components/navigation/NotFoud/NotFound';
import Login from './components/Login/Login';
class App extends Component {

    state = {
        loggedUser: JSON.parse(window.localStorage.getItem('user')) || null, loading: true
    }

    loginHandler = (paramEmail, paramPass) => {
        axios.post('/login', { 'email': paramEmail, 'password': paramPass })
            .then(response => {
                window.localStorage.setItem('user', JSON.stringify(response.data.user));
                window.localStorage.setItem('token', JSON.stringify(response.data.token));

                this.setState({ loggedUser: response.data.user, loading: false })
            })
            .catch(error => {
                alert('Login inválido');
                console.error(error);
            })
    }

    logoutHandler = () => {
        window.localStorage.clear();
        this.setState({loggedUser: null})
    }

    render() {
        
        if (this.state.loggedUser) {
            return (
                <div className="App" >
                    <Header userName={this.state.loggedUser.name}
                        logout={this.logoutHandler}
                    />
                    <div className="container pt-3">
                        <Switch>
                            <Route exact path='/' component={JobManagement} />
                            <Route path='/dashboard' component={JobManagement} />
                            <Route path='/vagas' component={JobManagement} />
                            <Route exact path='/sobre' component={About} />
                            <Route path='*' component={notFound} />
                        </Switch>
                    </div>
                </div>
            );
        }
        return (<Login login={this.loginHandler}></Login>);
    }
}

export default App;