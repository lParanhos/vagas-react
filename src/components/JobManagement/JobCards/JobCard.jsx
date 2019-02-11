import React from 'react';



import Dev from '../../../assets/developer.png';
import Des from '../../../assets/designer.png';
import Test from '../../../assets/tester.png';

const JobCard = (props) => {

    let img = null;


    switch (props.area) {

        case 'dev':
            img = Dev;
            break;
        case 'test':
            img = Test;
            break;
        case 'design':
            img = Des;
            break;
    }
    let button = <div></div>
    if (navigator.onLine) {
        button = (
            <div>
                <button className="btn btn-warning" onClick={props.editHandler}><i className="fas fa-edit"></i></button>
                <button className="btn btn-danger" onClick={props.removeHandler}><i className="fas fa-trash-alt"></i></button>
            </div>
        )}
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 pt-5">
                <div className="card">
                    <img className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">{props.name}</h4>
                        <strong>Descrição:</strong>
                        <p className="card-text">
                            {props.description}
                        </p>
                        <br />
                        <strong>Salário Base</strong>
                        <br />
                        <p>
                            R${props.salary}
                        </p>
                        {button}
                    </div>
                </div>
            </div>
        )
    }

    export default JobCard;