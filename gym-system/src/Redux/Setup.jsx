import { createSlice, configureStore } from '@reduxjs/toolkit'

const members_dataSlice = createSlice({
    name: 'members_data',
    initialState: {
        shift: "Morning",
        shift_WiseData: []
    },
    reducers: {
        setMemberShifts: (state, action) => {
            state.shift = action.payload
            console.log(action.payload);

        },
        setshiftWise_data: (state, action) => {
            state.shift_WiseData = action.payload
        }
    }
})

export const { setMemberShifts, setshiftWise_data } = members_dataSlice.actions

export const store = configureStore({
    reducer: {
        members_data: members_dataSlice.reducer,  // ✅ now you can access state.shifts.value
    },
})

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us

// {value: 1}