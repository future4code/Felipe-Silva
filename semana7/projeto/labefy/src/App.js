import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class App extends React.Component {
  state = {
    newPlaylist: "",
    userPlaylist: [],
    details: [],
    name: '',
    artist: '',
    url: '',
    insertTrack: ''
  };
  saveName = (e) => {
    this.setState({name: e.target.value})
  }
  saveArtist = (e) => {
    this.setState({artist: e.target.value})
  }
  saveUrl = (e) => {
    this.setState({url: e.target.value})
  }
  componentDidMount() {
    this.createPlaylist();
  }
  createPlaylist = () => {
    const body = {
      name: this.state.newPlaylist,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
        {
          headers: {
            Authorization: "Felipe-Silva-paiva",
          },
        }
      )
      .then((ans) => {
        alert("Sua playlist está pronta!");
        this.setState({ newPlaylist: "" });
      })
      .catch((err) => {
        alert("Algo deu errado!");
      });
  };
  namePlaylist = (e) => {
    this.setState({ newPlaylist: e.target.value });
  };
  viewPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "Felipe-Silva-paiva",
          },
        }
      )
      .then((ans) => {
        this.setState({ userPlaylist: ans.data.result.list });
      })
      .catch((err) => {
        console.log(err.ans.data);
      });
  };
  deletePlaylist = (id) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
      {
        headers: {
          Authorization: "Felipe-Silva-paiva",
        },
      }
    )
    .then((ans) => {
      this.createPlaylist();
    })
    .catch((err)=>{
      console.log(err.ans.data);
    })
  };
  viewTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
        headers: {
            Authorization: "Felipe-Silva-paiva"
        }
    }).then((ans) => {
        console.log(ans.data);
        this.setState({ details: ans.data.result.tracks })
        console.log(this.state.details);
    }).catch((err) => {
        console.log(err);
    })
  }
  addTrack = (id) => {
    const body = {
        "name": this.state.name,
        "artist": this.state.artist,
        "url": this.state.url
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
        headers: {
            Authorization: "Felipe-Silva-paiva"
        }
    }).then((ans) => {
        console.log(ans.data);
        alert("Musica adicionada.");
    }).catch((err) => {
        console.log(err.ans.data);
    })
  }
  addTrackForm = (e) => {
    this.setState({insertTrack: e.target.value})
  }


  render() {
    const displayPlaylist = this.state.userPlaylist.map((tracks) => {
      return <li key={tracks.id}>
        {tracks.name}
        <button onClick={()=> this.deletePlaylist(tracks.id)}>Apagar</button>
        <button onClick={()=> this.viewTracks(tracks.id)}>Faixas</button>
      </li>
    })
    const displayTracks = this.state.details.map((tracks)=>{
      return <div key={tracks.id}>
        <p>Nome: {tracks.name}</p>
        <p>Artista: {tracks.artist}</p>
        <p>url: {tracks.url}</p>
      </div>
    })
    const dropDown = this.state.userPlaylist.map((tracks)=>{
      return <option value={tracks.name}>{tracks.name}</option>
    })


    return (
      <div className="App">
        <h2>Nova playlist</h2>
        <input
          type="text"
          value={this.state.newPlaylist}
          onChange={this.namePlaylist}
        />
        <button onClick={this.createPlaylist}>Criar</button>
        <hr/>
        <h3>Suas playlists</h3>
        <div>{displayPlaylist, displayTracks}</div>
        <hr/>
        <p>Adicionar música</p>
        <input type='text' value={this.state.name} onChange={this.state.saveName}/>
        <p>Artista</p>
        <input type='text' value={this.state.artist} onChange={this.state.saveArtist}/>
        <p>Link</p>
        <input type='text' value={this.state.url} onChange={this.state.saveUrl}/>
        <label>Playlists</label>
        <form>
          <select value={this.state.addTrack} onChange={this.addTrackForm}>
            {dropDown}
          </select>
          <input type='submit' value='Selecionar'/>
        </form>
      </div>

    );
  }
}
