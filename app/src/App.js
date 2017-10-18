import React, { Component } from 'react';
import logo from './logo.svg';
import {Input} from './components/Input';
import {Table} from './components/Table';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleChange = this.handleChange.bind(this);
    this.processInput = this.processInput.bind(this);
  }

  processInput(input) {
    let sentenceArray = [];
    let isCapital = /[A-Z]/;
    let splitArray = input.trim().split('. ');
    splitArray.forEach( (item, index) => {
      if ( !isCapital.test(item[0]) ) {//test the sentence to see if an abbrevition with a period slipped by as a sentence.
        console.log("It's not a sentence");
        let previousSentence = sentenceArray[sentenceArray.length-1] || '';
        console.log(`index: ${index} previousSentence: ${previousSentence}`)
        let newSentence = `${previousSentence}. ${item}`;
        sentenceArray[sentenceArray.length-1] = newSentence;
      }
      else {
        sentenceArray.push(item);
      }
    });
    console.log(splitArray);
    console.log(sentenceArray);

  }

  countWords(sentenceArray) {
    let numberOfSentences = sentenceArray.length;

  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    const inputValue = this.state.input;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Scott Braia's Solution to Concordance</h1>
        </header>
        <div className="container">
          <Input onClick={this.processInput} onChange={this.handleChange} value={inputValue} />
          <Table />
        </div>
      </div>
    );
  }
}

export default App;