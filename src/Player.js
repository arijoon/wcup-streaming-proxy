import React, { Component } from 'react';
import * as Clappr from 'clappr';

class Player extends Component {
  constructor(props) {
    super(props);
    this.source = props.source;
  }

  componentDidMount() {
    this.setup();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.source !== this.source) {
      this.source = newProps.source;
      this.setup();
    }
  }

  setup(){
    if(this.player) {
      this.player.destroy();
    }

    window.$(this.el).resizable({
        aspectRatio: 16 / 9,
        maxHeight: 1000,
        maxWidth: 3000,
        minHeight: 240,
        minWidth: 320
    });

    this.player = new Clappr.Player({
      source: this.source,
      parentId: "#player-con",
      height: "100%",
      width: "100%",
      autoPlay: false
    });
  }

  render() {
    return (
      <div id="player-con" ref={el => this.el = el}>
      </div>
    );
  }
}

export default Player;
