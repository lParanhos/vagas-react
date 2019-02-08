import React from 'react';
import Logo from '../../../assets/logo-vagas.png';
import {Link} from 'react-router-dom';

const header = (props) =>{
 return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark col-md-12">

    <Link to='/dashboard'className="navbar-brand" href="#">
        <img src={Logo} style={{width: "100px"}} className="d-inline-block align-top" alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/vagas'className="nav-link text-light" href="#">Vagas</Link>
            </li>
            <li className="nav-item">
              <Link to='/sobre'className="nav-link text-light" href="#">Sobre</Link>
            </li>
        </ul>
    </div>

    <a className="nav-item nav-link text-white">{props.userName}</a>
    <a className="nav-item nav-link text-white" onClick={() => props.logout()}>
        <i className="fas fa-sign-out-alt"></i>
    </a>
</nav>

 )
}

export default header; 
