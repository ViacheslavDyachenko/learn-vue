import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
    value: number
};

const initialState: initialStateProps = {
    value: 0
};

const increment = createSlice({
    name: "repos",
    initialState,
    reducers: {
        incrementValue(state) {
            state.value += 1;
        }
    }
})

const { incrementValue } = increment.actions;

const actions = increment.actions;

export { incrementValue, actions }

export default increment.reducer;