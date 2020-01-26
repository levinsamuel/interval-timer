import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true" />

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"
        />

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin="true"
        />

        <script>var Alert = ReactBootstrap.Alert;</script>
      </header>
      <div id="main-body">
        <Main />
      </div>
    </div>
  );
}

export default App;
