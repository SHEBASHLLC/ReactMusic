import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'R3KT',
    artist: 'Rekt (Dubstep/DnB + Live),
    albumArtUrl: " ",
    audioUrl: "https://stream.rekt.network/rekt.ogg"
  },
  {
    title: 'REKT',
    artist: 'Rekt (Dubstep/DnB),
    albumArtUrl: "",
    audioUrl: "https://stream.rekt.network/rekt.ogg"
  },
  { 
    title: 'RESURREKT',
    artist: 'Live Set Replays',
    albumArtUrl: "",
    audioUrl: "https://stream.rekt.network/resurrekt.ogg"
  },
  {
    title: 'REKTIFY',
    artist: 'REKTIFY Lo-Fi',
    albumArtUrl: '',
    audioUrl: "https://stream.rekt.network/rektify.ogg"
  },
  {
    title: 'REKTORY',
    artist: 'REKTORY (Old School Reefer Jazz)',
    albumArtUrl: '',
    audioUrl: "https://stream.rekt.network/rektory.ogg"
  }
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


