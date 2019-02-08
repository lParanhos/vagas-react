import React from 'react';
import axios from 'axios'
class Form extends React.Component {

    objModel = Object.freeze({
        name: '',
        description: '',
        skills: '',
        differentials: '',
        salary: '',
        area: '',
        isPcd: ''
    })
    state = {
        newJob: { ...this.objModel }
    }


    postJobHandler = (event) => {
        
        let objId = '';
        axios.post('jobs', this.state.newJob).then(response =>{
            objId = response.data;
            this.props.addItemList({id: objId, ...this.state.newJob});
            this.setState({ newJob: { ...this.objModel } })
        })
        .catch(error =>{
            console.error(error);
        })
        event.preventDefault();
    }
    onValueChange = (attrName, pValue) => {

        let currentJob = this.state.newJob;
        currentJob[attrName] = pValue;
        this.setState({ newJob: currentJob });
    }
    render() {
        return (
            <form onSubmit={this.postJobHandler}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label>Nome*:</label>
                        <input type="text" className="form-control" id="nome"
                            value={this.state.newJob.name}
                            onChange={(event) => this.onValueChange('name', event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <label>Descrição:</label>
                        <textarea rows="3" type="text" className="form-control" id="desc"
                            value={this.state.newJob.description}
                            onChange={(event) => this.onValueChange('description', event.target.value)}
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label >Habilidades necessárias:</label>
                        <textarea type="text" className="form-control" id="habilidades"
                            value={this.state.newJob.skills}
                            onChange={(event) => this.onValueChange('skills', event.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group col-md-6">
                        <label >Diferenciais</label>
                        <textarea type="text" className="form-control" id="diff"
                            value={this.state.newJob.differentials}
                            onChange={(event) => this.onValueChange('differentials', event.target.value)}

                        ></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Salário base*:</label>
                        <input type="text" className="form-control" id="salario"
                            value={this.state.newJob.salary}
                            onChange={(event) => this.onValueChange('salary', event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Área*:</label>
                        <select id="area" className="form-control"
                            value={this.state.newJob.area}
                            onChange={(event) => this.onValueChange('area', event.target.value)}
                        >
                            <option value="" defaultValue>Selecione...</option>
                            <option value="dev" >Desenvolvimento</option>
                            <option value="design">Designer</option>
                            <option value="test">Teste</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="check"
                            value={this.state.newJob.isPcd}
                            onChange={(event) => this.onValueChange('isPcd', event.target.checked)}
                        />
                        <label className="form-check-label">
                            Pessoa Com deficiência
                                        </label>
                    </div>
                </div>
                <div className="text-right">
                    <button type="submit" className="btn btn-success">Criar Vaga</button>
                </div>
            </form>



        )
    }
}

export default Form