import React from 'react';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import GetQuoteButton from './components/GetQuote';
import { getKanyeQuote } from "../src/api";

class App extends React.Component {
  state = {
    quote: ''
  }

  render() {
    return (
      <div className="App">
        <>
          <Header />
          <Quote quote={this.state.quote} />
          <GetQuoteButton handleClick={this.handleClick} />
        </>
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
