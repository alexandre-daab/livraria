import React, {Component} from "react";

class ListaCategoria extends Component{

    salvarCategoria(evento){
        console.log(evento)
        if(evento.key === "Enter"){
            const elemento = evento.target.value;
            this.props.criarCategoria(elemento);
        }
    }

    render(){
        return(
            <section>
                <ul>
                    {this.props.categorias.map((categoria, key)=>{
                        return(<li id={key}>{categoria}</li>);        
                    })}
                </ul>
                <input type="text" id="ale" onKeyUp={this.salvarCategoria.bind(this)}></input>
            </section>
        );
    }
}
export default ListaCategoria;