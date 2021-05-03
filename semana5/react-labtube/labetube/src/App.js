import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = 'Título do vídeo'

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="App">
      <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li class="botoes-meunu-vertical">Início</li>
                    <li class="botoes-meunu-vertical">Em alta</li>
                    <li class="botoes-meunu-vertical">Inscrições</li>
                    <hr />
                    <li class="botoes-meunu-vertical">Originais</li>
                    <li class="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1">
                    <img src="https://picsum.photos/400/400?a=1 " alt=""onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2">
                    <img src="https://picsum.photos/400/400?a=2 " alt="" onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3">
                    <img src="https://picsum.photos/400/400?a=3 " alt="" onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4">
                    <img src="https://picsum.photos/400/400?a=4 " alt="" onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5">
                    <img src="https://picsum.photos/400/400?a=5 " alt="" onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6">
                    <img src="https://picsum.photos/400/400?a=6 " alt="" onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7">
                    <img src="https://picsum.photos/400/400?a=7 " alt="" onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8">
                    <img src="https://picsum.photos/400/400?a=8 " alt="" onClick={reproduzVideo}/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
     
    </div>
  );
}

export default App;
