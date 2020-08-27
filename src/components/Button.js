import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Button extends Component {
  //-----it is a property and should only name contextType--static puts property straight to the class 
  static contextType = LanguageContext;


  render() {
    const text = this.context === 'english'? 'Submit' : 'Voorleggen';
    // console.log(this.context);
    return (
    <button className="ui button primary ">{text}</button>
    )
  }
}
//-----another way to make contextType
//Button.contextType = LanguageContext;
export default Button;
