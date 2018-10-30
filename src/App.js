import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quote:null,author:null };
    }
  componentDidMount (){ 

    const url = 'https://random-quotes.now.sh/';
    
    fetch(url)
    .then((response)=> {
    return response.json();
    })
    .then((data)=> {
    
    this.setState(() => {
    return {author: data.data.author,quote: data.data.quote};
    });
    });
    }

    render() {
      return (
      <div className="App">
      
      {
      this.state.quote === '' || this.state.quote === null
      ? (
      <img src={logo} className="App-logo" alt="logo" />
      )
      : null
      } 
      
      <h1 className="App-title">{ this.state.quote}</h1>
     
      
      {
      this.state.author !== ''
      ? (
      <h1 className="App-title" ><code>{this.state.author}</code></h1>
      
      )
      : <h1 className="App-title"><code>Unknown </code></h1> 
      }
      </div>
      );
      }
}

export default App;
