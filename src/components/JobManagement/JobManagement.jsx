import React, { Component } from 'react';
import JobCard from './JobCards/JobCard';
import Form from '../Form/Form';
import Collapse from '../navigation/Collapse/Collapse';

import axios from 'axios';

export default class JobsList extends Component {

    state = {
        jobs: []
    }

    // usando o formulario
    jobCreateHandler = (paramNewJob) => {
        let newList = this.state.jobs;
        newList.push(paramNewJob);
        this.setState({ jobs: newList })
    }
    jobEditHandler = (paramName) => {
        console.log(`Vaga ${paramName}`)
    }
    jobRemoveHandler = (paramId, paramName) => {
        if (window.confirm(`Deseja realmente remover a vaga "${paramName}" ?`)) {
            axios.delete(`/jobs/${paramId}`)
                .then(() => {

                    const index = this.state.jobs.findIndex(job => job.id === paramId)
        
                    let newList = this.state.jobs;
                    newList.splice(index, 1);
                    this.setState({ jobs: newList })
                    window.alert('Removido com sucesso !');
                })
                .catch(error =>{
                    console.error(error);
                })
        }
    }

    componentDidMount() {
        const axiosConfig = {
            'Autorization': 'Bearer' + JSON.parse(window.localStorage.getItem('token'))
        }
        axios.get('/jobs', axiosConfig)
            .then(response => {
                this.setState({ jobs: response.data })
            })
            .catch(error => {
                console.error(error)
            });

    }

    render() {
        const renderJobs = this.state.jobs.map(job => {
            return <JobCard
                key={job.id}
                name={job.name}
                description={job.description}
                salary={job.salary}
                area={job.area}
                removeHandler={() => this.jobRemoveHandler(job.id, job.name)}
                editHandler={() => this.jobEditHandler(job.name)}
            />
        })
        return (
            <div className="container">
                <Collapse textButton="Criar Vaga" collapseId="jobForm">
                    <Form addItemList={this.jobCreateHandler} />
                </Collapse>
                <div className="row">
                    {renderJobs}
                </div>
            </div>
        )
    }
}
