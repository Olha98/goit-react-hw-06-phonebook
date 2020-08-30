import contactReducer from '../Redux/Reducers/Reducers'
import { configureStore } from '@reduxjs/toolkit';


  const store = configureStore({
    reducer: {
      state: contactReducer
    },
  });

export default store