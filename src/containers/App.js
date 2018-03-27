import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <Paper style={style} zDepth={4} rounded={false} />
        Hello Wrorld!
      </div>
    );
  }
}
export default App;