import React, {Component} from 'react';
import ListaDeNotas from './componentes/ListaDeNota/ListaDeNotas';
import FormularioCadastro from "./componentes/FormularioCadastro/FormularioCadastro";
import Filtro from "./componentes/Filtro/Filtro";
import ListaCategoria from "./componentes/ListaCategoria";
class App extends Component{

  constructor(){
    super();
    this.state={
      listaNotas:[],
      categorias:[]
    };
  }

  criarNota(titulo, texto){
    const nota = {titulo, texto};
    const novoEstadoNotas = [...this.state.listaNotas, nota];
    const novoEstado = {listaNotas: novoEstadoNotas};
    this.setState(novoEstado);

  }

  criarCategoria(categoria){
    const novaCategoria = [...this.state.categorias, categoria];
    const novoEstado = {categorias: novaCategoria};
    this.setState(novoEstado);
  }

  deletarNota(indice){
    let notas = this.state.listaNotas;
    notas.splice(indice, 1);
    this.setState(notas);
  }

  render(){

    return (
      <section>
        <ListaCategoria categorias={this.state.categorias} criarCategoria={this.criarCategoria.bind(this)}/>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.listaNotas} deletar={this.deletarNota.bind(this)}/>
        <Filtro/>
      </section>
    );
  }
}

export default App;
