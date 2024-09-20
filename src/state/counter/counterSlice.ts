import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    error: string | null;
};

const initialState: CounterState = {
    value: 0,
    error: null
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.error = state.value > 11 ? "Max limit reached" : null;
        },
        decrement: (state) => {
            state.value -= 1;
            state.error = state.value < 0 ? "min limit reached" : null;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const { increment, incrementByAmount, decrement } = counterSlice.actions;
export default counterSlice.reducer;