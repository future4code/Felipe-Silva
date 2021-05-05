import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import PitPic from './img/pitbull.jpg';
import StaffPic from './img/amstaff.jpg';


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
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
          />

        <Post
          nomeUsuario={'Felipe'}
          fotoUsuario={PitPic}
          fotoPost={StaffPic}
        />
      
        <Post
          nomeUsuario={'Indio'}
          fotoUsuario={'https://portalaverdade.com.br/wp-content/uploads/2019/04/Dia-do-Indio-1-660x330.jpg'}
          fotoPost={'https://veja.abril.com.br/wp-content/uploads/2016/06/brasil-brasilia-esplanada-indios-protesto-20131002-03-original3.jpeg?quality=70&strip=info&resize=680,453'}
        />
      </MainContainer>
    );
  }
}

export default App;
