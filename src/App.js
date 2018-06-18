import React, { Component } from 'react';
import logo from './icon.png';
import './App.css';
import Player from './Player';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hideHeader: false,
      urls: [
        {
          name: 'BBC/ITV',
          url: 's98.m3u8'
        },
        {
          name: 'TSN',
          url: 's21.m3u8'
        }
      ],
      activeUrl: 0,
      servers: [
        {
          name: 'Media 1',
          url: 'media1'
        },
        {
          name: 'Media 2',
          url: 'media2'
        }
      ],
      activeServer: 0
    }
  }

  changePlayer(index) {
    this.setState({ activeUrl: index });
  }

  changeServer(index) {
    this.setState({ activeServer: index });
  }


  getLink(media, item) {
    return `/${media}/${item}`;
  }

  render() {
    const { urls, activeUrl, servers, activeServer, hideHeader } = this.state;
    return (
      <div className="App">
        {!hideHeader && this.renderHeader()}
        <div className="container">
          <div className="row">
            <div className="input-group mb-3">
              <div className="input-group-append center">
                {servers.map((server, index) =>
                  <button key={server.url} className={`btn btn-outline-secondary ${index === activeServer && 'active'}`} type="button"
                    onClick={() => this.changeServer(index)}>{server.name}</button>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-group mb-3">
              <div className="input-group-append center">
                {urls.map((item, index) =>
                  <button key={item.url} className={`btn btn-outline-secondary ${index === activeUrl && 'active'}`} type="button"
                    onClick={() => this.changePlayer(index)}>{item.name}</button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="App-intro">
          <Player source={this.getLink(servers[activeServer].url, urls[activeUrl].url)} />
        </div>
      </div>
    );
  }

  renderHeader() {
    return <header className="App-header" onClick={() => this.setState({ hideHeader: true })}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Streamer</h1>
    </header>
  }
}

export default App;
