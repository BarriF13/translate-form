
import React, { Component } from 'react'

export class LanguageSelector extends Component {
 
  render() {
    return (
      <div>
        select a language:
        <i className="flag uk" onClick={() => this.props.onLanguageChange('english')}></i>
        <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')}></i>
      </div>
    )
  }
}

export default LanguageSelector
