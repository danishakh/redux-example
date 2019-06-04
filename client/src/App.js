import React from 'react';
import { Provider } from 'react-redux';     //glue for react and redux
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './store';


function App() {
  return (
    // Provider takes a 'store' which holds the state 
    <Provider store={store}>    
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
