import React, {Component} from 'react';
import '../css/app.css';
import Graph from './Graph';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header"></header>
        <main className="main">
          <div className="width-limiter">
            <Graph />
          </div>
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
