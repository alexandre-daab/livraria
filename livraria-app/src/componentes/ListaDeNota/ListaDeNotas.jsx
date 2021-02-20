import React, {Component} from 'react';
import CardNota from "../CardNota/CardNota";

export default class ListaDeNotas extends Component{
    render(){
        return(
            <ul>
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto} indice={index} deletar={this.props.deletar}/>
                        </li>
    
                    )
                })}
            </ul>
        )
    };
}