import React, { Component } from 'react';
import { Context, UserContext } from '../Context';

class ConsumerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Context.Consumer>
        {
          theme => {
            return <div>ConsumerPage --- {theme.themeColor}
              
              <UserContext.Consumer>
                {
                  user => {
                    return <h4>{ user.name}</h4>
                  }
                }
              </UserContext.Consumer>
            </div>
          }
        }
      </Context.Consumer>
    );
  }
}
 
export default ConsumerPage;