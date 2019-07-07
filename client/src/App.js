import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { text: '' };

  async componentDidMount() {
    const res = await axios.get('/hello');
    this.setState({ text: res.data.text });
  }

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <div>{text}</div>
      </div>
    );
  }
}

export default App;
