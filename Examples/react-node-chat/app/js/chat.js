import React from 'react';
import ReactDOM from 'react-dom';

import Chat from './components/chat';

class App extends React.Component {
  render() {
    return (
        <div>
            <div className="container">
                <Chat />
            </div>
        </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById('main'));