import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user_credentials:[
        {
            id:1,
            email:"shital@gmail.com",
            Password:"123"
        },
        {
            id:2,
            email:"trupti@gmail.com",
            Password:"1234"
        },
        {
            id:3,
            email:"pruthvi@gmail.com",
            Password:"12345"
        }
    ]
}

const UserSlice = createSlice({
    name:"UserSlice",
    initialState,
    reducers:{

    }
})

export default UserSlice.reducer