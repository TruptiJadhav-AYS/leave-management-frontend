import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    Users : [
        {
          id:1 ,
          email:"pratiksha@gmail.com",
          password:"123"
        },
        {
            id:2 ,
            email:"trupti@gmail.com",
            password:"1234"
        },
        {
          id:3,
          email:"pruthvi@gmail.com",
          password:"12345"
        },
      ],
}


const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
    }
})


export default UserSlice.reducer