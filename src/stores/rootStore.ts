

import { configureStore } from "@reduxjs/toolkit";
import increment from "./increment";

const store = configureStore({
  reducer: {
    increment,
  },
});

export default store;