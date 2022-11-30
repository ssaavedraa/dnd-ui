const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    token: null
  },
  reducers: {
    setUserCredentials: (state, action) => {
      window.localStorage.setItem('authToken', action.payload.accessToken)

      state.username = action.payload.username
      state.token = action.payload.accessToken
    }
  }
})

export default authSlice.reducer

export const { setUserCredentials } = authSlice.actions
