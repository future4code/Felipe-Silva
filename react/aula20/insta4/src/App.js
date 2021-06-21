import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Tchaicovsky'}
          fotoUsuario={'https://www.musicwithease.com/images01/tchaikovsky-kuznetsov-crop.jpg'}
          fotoPost={'https://i.ytimg.com/vi/qP_INIzWYis/maxresdefault.jpg'}
        />

        <Post
          nomeUsuario={'Maiacovsky'}
          fotoUsuario={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Vladimir_Mayakovsky_1914.jpg/220px-Vladimir_Mayakovsky_1914.jpg'}
          fotoPost={'https://images-na.ssl-images-amazon.com/images/I/61OnQSNZ7YL.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
