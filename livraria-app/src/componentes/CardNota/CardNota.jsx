import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSvg} from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagarNota(){
    const indice = this.props.indice;
    this.props.deletar(indice);
  }
  render() {
    return (
      <section>
        <header>
          <h3>{this.props.titulo}</h3>
          <DeleteSvg onClick={this.apagarNota.bind(this)} />
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
