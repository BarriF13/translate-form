import React, { Component } from 'react';

//set up the default language to english
const Context = React.createContext('english');


export class LanguageStore extends Component {
  //------------business logic 
  //can be used by other component
  state = { language: 'english' };
  //can change language by other component
  onLanguageChange = (language) => {
    this.setState({ language })

  }

  render(){
    return(
      <Context.Provider value={ {...this.state, onLanguageChange } }>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export default Context;