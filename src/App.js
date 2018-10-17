import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.js";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Lista de proyectos de Github!</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
