import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers'; // Import your rootReducer here

const AppWrapper = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}> // Set context
      <App /> // Now App has access to the context and the Redux store
    </Provider>
  );
};

export default AppWrapper;