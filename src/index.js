import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastKey: undefined,
      color: 'green',
    };
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const colors = ['green', 'yellow', 'blue', 'purple', 'cyan', 'red'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  onKeyPressed(e) {
    const msg = new SpeechSynthesisUtterance(e.key);
    window.speechSynthesis.speak(msg);
    this.setState({ lastKey: e.key.toUpperCase(), color: this.changeColor() });
  }

  render() {
    return (
      <div
        onKeyDown={e => this.onKeyPressed(e)}
        tabIndex="0"
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'black',
          color: this.state.color,
          fontSize: '800px',
          textAlign: 'center',
        }}
      >
        {this.state.lastKey ? this.state.lastKey : '🐑'}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
