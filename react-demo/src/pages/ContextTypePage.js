import { Context } from "../Context";
import React, { Component } from 'react';

class ContextTypePage extends Component {
  static contextType = Context
  render() {
    console.log(this.context);
    const {themeColor} = this.context
    return (
      <div>ContextTypePage --- {themeColor}</div>
    );
  }
}
 
export default ContextTypePage;