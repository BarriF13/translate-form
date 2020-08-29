
import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
export class LanguageSelector extends Component {
  //to access the context
  static contextType = LanguageContext;
 
  render() {
console.log(this.context)
    return (
      <div>
        select a language:
        <i className="flag uk" onClick={() => this.context.onLanguageChange('english')}></i>
        <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}></i>
      </div>
    )
  }
}

export default LanguageSelector
