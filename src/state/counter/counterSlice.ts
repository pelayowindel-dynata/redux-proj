import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    error: string | null;
};

const initialState: CounterState = {
    value: 0,
    error: null
};

const getErrorMessage = (value: number) => {
    if (value > 11) return "Max limit reached";
    if (value < 0) return "Min limit reached";
    return null;
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.error = getErrorMessage(state.value);
        },
        decrement: (state) => {
            state.value -= 1;
            state.error = getErrorMessage(state.value);
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
            state.error = getErrorMessage(state.value);
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(incrementAsync.pending, ()=>{
            console.log("pending");
        })
        .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>)=>{
            state.value += action.payload;
            state.error = getErrorMessage(state.value);
        });

        builder.addCase(decrementAsync.pending, ()=>{
            console.log("pending");
        })
        .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>)=>{
            state.value -= action.payload;
            state.error = getErrorMessage(state.value);
        });
    } 
});

export const incrementAsync  = createAsyncThunk(
    "counter/incrementAsync",
    async(amount : number)=> {
        await new Promise((resolve)=> setTimeout(resolve,5000));
        return amount;
    }
);

export const decrementAsync  = createAsyncThunk(
    "counter/decrementAsync",
    async(amount : number)=> {
        await new Promise((resolve)=> setTimeout(resolve,5000));
        return amount;
    }
);

export const { increment, incrementByAmount, decrement } = counterSlice.actions;
export default counterSlice.reducer;