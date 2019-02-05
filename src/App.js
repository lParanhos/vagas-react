import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import JobsList from './components/Job/JobsList';
import Form from './components/Form/Form';
import Collapse from './components/navigation/Collapse/Collapse'
class App extends Component {
    render() {
        return (
            <div className="App" >

                <Header />

                <div className="container pt-3">
                <Collapse textButton="Criar Regra" collapseId="jobForm">
                    <Form/>
                </Collapse>
                    <JobsList />
                </div>
            </div>
        );
    }
}

export default App;