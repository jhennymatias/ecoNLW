import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import logo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi'
const CreatePoint = () =>{
    return(
        <div id="page-create-point">
            <header>
                <img src={logo} alt="ecoleta"/>
                <Link to="/">
                    <FiArrowLeft/>
                        Voltar para a Home
                </Link>
            </header>

            <form>
                <h2>Cadastro do <br /> ponto de coleta</h2>
                <fieldset>
                    <legend>
                        <h3>Dados</h3>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input type = "text"
                        id="name"
                        name="name"/>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type = "email"
                            id="email"
                            name="email"/>
                        </div>
                        
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type = "text"
                            id="whatsapp"
                            name="whatsapp"/>
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>
                        <h3>Endereço</h3>
                    </legend>

                </fieldset>
                <fieldset>
                    <legend>
                        <h3>Itens de coleta</h3>
                    </legend>

                </fieldset>
            </form>


        </div>
    );
}

export default CreatePoint;