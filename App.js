import React from 'react';
import AppRouter from './App/AppRouter'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import name from './App/Reducer/name';

const store = createStore(name);

export class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </>
    );
  };
};

export default App;
