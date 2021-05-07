import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    background-color: aliceblue;
    border: 1px green solid;
    border-radius: 2px;
    margin: 6px 0;
  }

  form div {
    display: flex;
    flex-direction: row;
  }
  form div div {
    padding: 10px 10px;
  }
  form button {
    width: 200px;
    margin: 10px 0;
    color: white;
    background-color: blue;
  }
  form button:hover {
    cursor: pointer;
    color: goldenrod;
    background-color: black;
  }
`

class App extends React.Component {

  state = {
    usuarios: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: "Felipe",
        fotoUsuario:'./img/pitbull.jpg',
        fotoPost: './img/amstaff.jpg'
      },
      {
        nomeUsuario: "Indio",
        fotoUsuario:'https://portalaverdade.com.br/wp-content/uploads/2019/04/Dia-do-Indio-1-660x330.jpg',
        fotoPost: 'https://veja.abril.com.br/wp-content/uploads/2016/06/brasil-brasilia-esplanada-indios-protesto-20131002-03-original3.jpeg?quality=70&strip=info&resize=680,453'
      }
    ],
    valorInputNomeUsuario:'',
    valorInputFotoUsuario:'',
    valorInputFotoPost:'' 
  };

  onChangeNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario:event.target.value});
  }

  onChangeFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario:event.target.value});
  }

  onChangeFotoPost = (event) => {
    this.setState({valorFotoPost:event.target.value});
  }

  novoPost = (event)=> {
    event.preventDefault()
    const novoUsuario = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    const postAdicionado = [...this.state.usuarios, novoUsuario];

    this.setState({usuarios:postAdicionado});
  };

  render() {
    const listaDeUsuarios =this.state.usuarios.map((usuario) => {
      return (
        <Post key={usuario.nomeUsuario}
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <form>
          <h2><em>Postar</em></h2>
          <div>
            <div>
              <input
                value={this.state.valorInputNomeUsuario}
                onChange={this.onChangeNomeUsuario}
                placeholder={"nome"}
              />
            </div>
            <div>
              <input
                value={this.state.valorInputFotoUsuario}
                onChange={this.onChangeFotoUsuario}
                placeholder={"foto do perfil"}
              />
            </div>
            <div>
              <input
                value={this.state.valorInputFotoPost}
                onChange={this.onChangeFotoPost}
                placeholder={"postagem"}
              />
            </div>
          </div>
          <button onClick={this.novoPost}>novo post</button>
        </form>
        <div>{listaDeUsuarios}</div>
      </MainContainer>
    );
  }
}

export default App;
