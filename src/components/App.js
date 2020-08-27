import React, { Component } from 'react'
import UserCreate from '../components/UserCreate';
export class App extends Component {
  state = {     language: 'english' };

onLanguageChange = language =>{
this.setState( {language })
}
  render() {
    return (
      <div className= "ui container">
      <div>
        select a language:
        <i className="flag uk" onClick={() =>this.onLanguageChange('english')}></i>
        <i className="flag nl"onClick={() =>this.onLanguageChange('dutch')}></i>
      </div>
      <UserCreate/>

      {/* {this.state.language} */}
      </div>
    )
  }
}

export default App;
