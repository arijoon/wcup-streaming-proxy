import React, { Component } from 'react';
import logo from './icon.png';
import './App.css';
import Player from './Player';

class App extends Component {
  constructor(){
    super();
    this.state = {
      hideHeader: false,
      urls: [
        {
          name: 'BBC/ITV',
          url: '/media1/s98.m3u8'
        },
        {
          name: 'TSN',
          url: '/media1/s21.m3u8'
        }
      ]
    }

    this.state.active = 0;
  }

  changePlayer(index) {
    this.setState({ active: index });
  }

  render() {
    const { urls, active, hideHeader } = this.state;
    return (
      <div className="App">
        {!hideHeader && this.renderHeader()}
        <div className="container">
          <div className="row">
            <div className="input-group mb-3">
              <div className="input-group-append center">
                {urls.map((item, index) =>
                  <button key={item.url} className={`btn btn-outline-secondary ${index == active ? 'active' : ''}`} type="button"
                    onClick={() => this.changePlayer(index)}>{item.name}</button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="App-intro">
          {/* <Player source={"/media1/s21.m3u8"} /> */}
          <Player source={urls[active].url} />
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
