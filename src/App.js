import React from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import GetQuoteButton from './components/GetQuote';
import { getKanyeQuote } from "../src/api";
import PickSong from './components/PickSong';



class App extends React.Component {
  state = {
    quote: ''
  }

  render() {
    return (
      <div className="container">

        <Header />
        <Quote quote={this.state.quote} />
        <GetQuoteButton handleClick={this.handleClick} />
        {/* <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7qQG2hCGiwy" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" className="SpotifyPlayer" title="Spotify"></iframe> */}
        <PickSong />
      </div>
    );
  }

  handleClick = () => {
    getKanyeQuote()
      .then(quote => {
        this.setState({ quote })
      })
  }
}

export default App;

