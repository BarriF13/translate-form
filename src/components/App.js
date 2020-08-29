import React, { Component } from 'react'
import UserCreate from '../components/UserCreate';
//we are making provider so we need the language context
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';

export class App extends Component {
  state = { language: 'english' };

 
  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
       <LanguageSelector onLanguageChange={this.onLanguageChange}/>
        {/* UserCreate needs to get some info form context obj because button and field are in there so we wrap it with provider and context then give value  */}
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='teal'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
        {/* {this.state.language} */}
      </div>
    )
  }
}

export default App;
