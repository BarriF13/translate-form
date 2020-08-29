import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

// export class Button extends Component {
//   //-----it is a property and should only name contextType--static puts property straight to the class 
//   static contextType = LanguageContext;


//   render() {
//     const text = this.context === 'english'? 'Submit' : 'Voorleggen';
//     // console.log(this.context);
//     return (
//       <button className="ui button primary ">{text}</button>
//     )
//   }
// }
// //-----another way to make contextType
// //Button.contextType = LanguageContext;

//------------ using Consumer method
export class Button extends Component {
// language used to call value
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>

          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  //we are passing a child to a consumer --here is value 
  render() {

    return (
      <ColorContext.Consumer >
        {(color) => this.renderButton(color)}

      </ColorContext.Consumer>
    )
  }
}
//-----another way to make contextType
//Button.contextType = LanguageContext;
export default Button;
