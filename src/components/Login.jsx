import React from 'react'
import {Link} from 'react-router-dom'

import Union from './../img/Union.png'

export default () => 
    <>
    <div>
        <div id="divlogin">
            <img src={Union}></img>
            <form id="formlogin"> 
                <input placeholder="digite seu email"></input>  
                <input placeholder="digite seu email"></input>  
                <button class="button">ENTRAR</button>
                <label>Esqueci minha senha</label>
            </form>   
        </div>   
    </div>
        <div id="rodape">
            <Link to="/CadastroUsu" class="button2">Novo no Tina? Cadastre-se</Link>    
        </div>       
    </>