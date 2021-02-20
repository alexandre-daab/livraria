import React, { Component} from 'react';

export default class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }
    
    _handleMudancaTitulo(evento){
        this.titulo = evento.target.value;  
        console.log(this.titulo);  
    }

    _handleMudancaNota(evento){
        this.texto = evento.target.value;  
        console.log(this.texto);  
    }

    _criarNota(evento){
        evento.preventDefault();
        this.props.criarNota(this.titulo, this.texto);        
    }

    render(){
        return(
            <form onSubmit={this._criarNota.bind(this)}>
            <input type="text" placeholder="Título da nota" onChange={this._handleMudancaTitulo.bind(this)}/>
            <textarea placeholder="Digite sua nota" onChange={this._handleMudancaNota.bind(this)} />
            <button className="glyphicon glyphicon glyphicon-plus">Criar nota</button>
          </form>
        );
    }
}