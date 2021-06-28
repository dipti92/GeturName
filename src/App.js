import React from 'react';
import './App.css';
import Header from './Compo/Header';
import SearchBox from './Compo/SearchBox';
import ResultContainer from './Compo/ResultContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      header_expand : true,
      suggested : []
    }
  }

  handleInput = (inputText) =>{
    this.setState({header_expand : !inputText,
    suggested : inputText ? name(inputText) : []
  });
    //we can directly put boolean operator on string if it is empty it returns false
    //else true so here no need to put .length method
  };

 render(){
    return (
      <div>
        <Header headExpand = {this.state.header_expand}/>
        <SearchBox onInput = {this.handleInput}/>
        <ResultContainer suggested = {this.state.suggested}/>
      </div>
    );
  }
}

export default App;
