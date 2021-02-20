import React, { Component} from 'react';

class Filtro extends Component{
    render(){
        return(
            <form>
            <input type="text" placeholder="informe o nome do livro"/>
            <button>Criar nota</button>
          </form>
        );
    }
}
export default Filtro;