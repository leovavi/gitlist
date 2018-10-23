import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./Search";
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Search}/>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
