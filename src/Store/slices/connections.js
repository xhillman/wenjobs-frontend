import { createSlice } from "@reduxjs/toolkit";

export const connectionsSlice = createSlice({
    name: "connections",
    initialState: {
        connections: [],
    },
    reducers: {
        setConnectionsData: (state, action) => {
            state.connections = action.payload;
        }
    },
});

export const { setConnectionsData } = connectionsSlice.actions;

export default connectionsSlice.reducer;