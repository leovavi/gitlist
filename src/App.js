import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header.js";
import Search from "./Search.js";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <Search />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
