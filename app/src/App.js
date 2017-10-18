import React, { Component } from 'react';
import logo from './logo.svg';
import {Input} from './components/Input';
import {Table} from './components/Table';
import {SentenceStats} from './components/SentenceStats';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      filteredArray: [],
      sentences: 0,
      uniqueWords: 0,
      wordMatchArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.processInput = this.processInput.bind(this);
  }

  processInput(input) {
    let trimmedString = input.trim(); //remove whitespace 
    let sentenceArray = [];
    let isCapital = /[A-Z]/;
    let splitArray = trimmedString.split('. ');
    splitArray.forEach( (item, index) => {
      if ( !isCapital.test(item[0]) ) {//test the sentence to see if an abbrevition with a period slipped by as a sentence.
        let previousSentence = sentenceArray[sentenceArray.length-1] || '';
        let newSentence = `${previousSentence}. ${item}`;
        sentenceArray[sentenceArray.length-1] = newSentence;
      }
      else {
        sentenceArray.push(item);
      }
    });
    this.countWords(trimmedString, sentenceArray);
  }

  countWords(trimmedString, sentences) {
    let numberOfSentences = sentences.length;
    let splitArray = trimmedString.toLowerCase().split(' ').sort();
    let filteredArray = splitArray.filter( (item, index) => {
      return splitArray.indexOf(item) === index; 
    });
    filteredArray = filteredArray.map(item => item.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
    let sentenceArray = []; 
    sentences.forEach( (item) => {
      sentenceArray.push( item.split(' ') );
    });
    let wordMatchArray = [];
    filteredArray.forEach( (word, wordIndex) => {
      let wordObject = {
        item: word,
        index: wordIndex,
        sentences: [],
        occurances: 0
      }
      sentenceArray.forEach( (sentence, sentenceNumber) => {
        wordObject.sentences[sentenceNumber] = 0;
        sentence.forEach( (item, index) => {
          if (word === item.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")) {
            wordObject.sentences[sentenceNumber]++;
            wordObject.occurances++;
          }
        });
      });
      wordMatchArray.push(wordObject);
    });
    console.log(wordMatchArray[0]);
    console.log(sentenceArray);
    console.log(filteredArray);
    this.setState({
      filteredArray: filteredArray, 
      numberOfSentences: numberOfSentences,
      uniqueWords: filteredArray.length,
      wordMatchArray: wordMatchArray
    });
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    const inputValue = this.state.input;
    let data = null;
    if(this.state.filteredArray.length > 0) {
      data = <div><SentenceStats sentences={this.state.numberOfSentences} unique={this.state.uniqueWords} /><Table wordMatchArray={this.state.wordMatchArray} /></div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Scott Braia's Solution to Concordance</h1>
        </header>
        <div className="container">
          <Input onClick={this.processInput} onChange={this.handleChange} value={inputValue} />
          {data}
        </div>
      </div>
    );
  }
}

export default App;