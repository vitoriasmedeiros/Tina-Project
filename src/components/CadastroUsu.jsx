import React from 'react'
import {Link} from 'react-router-dom'

export default () => 
    <> 
        <h1>Cadastre-se</h1>
        <div id="divlogin">
            <form id="formlogin">
                <input placeholder="Nome Completo"></input>  
                <input placeholder="Email"></input>  
                <input placeholder="Telefone"></input>  
                <input placeholder="Senha"></input>  
                <input placeholder="Confirmar Senha"></input>  
                <Link to="/Login" class="button">CADASTRAR</Link>
            </form>
            </div>
        <div id="rodape">
            <Link to="/Login" class="button2">Já tem conta no Tina? Entrar</Link>    
        </div>
    </>