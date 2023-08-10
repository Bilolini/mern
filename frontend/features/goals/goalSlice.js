import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import goalService from './goalService'

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Create a new goal
export const createGoal = createAsyncThunk(
    "goals/create",
    async (goalData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await goalService.createGoal(goalData, token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get user goals
export const getGoals = createAsyncThunk(
    "goals/getAll",
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await goalService.getGoals(token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
)

// Delete a new goal
export const deleteGoal = createAsyncThunk(
    "goals/delete",
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await goalService.deleteGoal(id, token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, state => {
                state.isLoading = true;
            })
            .addCase(createGoal.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.goals.push(payload)
            })
            .addCase(createGoal.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = payload;
            })
            .addCase(getGoals.pending, state => {
                state.isLoading = true;
            })
            .addCase(getGoals.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.goals = payload;
            })
            .addCase(getGoals.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.isError = true;
                state.message = payload;
            })
            .addCase(deleteGoal.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteGoal.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.goals = state.goals.filter(elem => elem._id !== payload);
            })
            .addCase(deleteGoal.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.isError = true;
                state.message = payload;
            })
    },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
