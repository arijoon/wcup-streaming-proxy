import React, { Component } from 'react';
import * as Clappr from 'clappr';

const sizeKey = "playerSize";
const defaultSize = { width: 900, height: 600 }

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
    const el = window.$(this.el)

    const size = this.getSize();
    el.css('width', `${size.width}px`);
    el.css('height', `${size.height}px`);

    el.resizable({
        aspectRatio: 16 / 9,
        maxHeight: 1000,
        maxWidth: 3000,
        minHeight: 240,
        minWidth: 320
    });

    el.on('resizestop', (_, ui) => this.setSize(ui.size.width, ui.size.height));

    this.player = new Clappr.Player({
      source: this.source,
      parentId: "#player-con",
      height: "100%",
      width: "100%",
      autoPlay: false
    });
  }

  getSize() {
    const item = localStorage.getItem(sizeKey);

    if(item) {
      return JSON.parse(item);
    }

    return defaultSize;
  }

  setSize(width, height) {
    localStorage.setItem(sizeKey, JSON.stringify({ width, height }));
  }

  render() {
    return (
      <div id="player-con" ref={el => this.el = el}>
      </div>
    );
  }
}

export default Player;
