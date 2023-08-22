import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_USERS, API_LOGS } from '../constants/api';
import { notification } from 'antd';



//createUser
export const createUser = createAsyncThunk(
  'user/create',
  async (userData, thunkAPI) => {
    console.log("🚀 ~ file: usersAPI.jsx:37 ~ userData:", userData)
    try {
      //const response = await axios.post('https://fakestoreapi.com/users', {userData});
      const response = await axios({
        method: 'post',
        url: API_USERS.create,
        headers: {
          auth: localStorage.getItem('token')
        },
        data: userData
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//loginUser
export const loginUser = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue, dispatch }) => {
    console.log("🚀 ~ file: usersAPI.jsx:7 ~ userData:", userData)
    try {
      const response = await axios.post('/inventory/user/login', {
        username: userData.username, 
        password: userData.password
      });
      axios.defaults.headers['auth'] = response.data?.token
      const { token } = response.data;
      dispatch(usersAPI.actions.setToken(token));
      localStorage.setItem('token', response.data?.token)
      console.log("🚀 ~ file: usersAPI.jsx:10 ~ response:", response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
  {
    fulfilled: (user, thunkAPI) => {
      const history = thunkAPI.extra.history;
      history.push('/dashboard');
    },
  }
);

//getOneUser
export const getOneUser = createAsyncThunk(
  'user/getOne/:user_id',
  async (user_id) => {
    const response = await axios.get(API_USERS.getOne(user_id),{headers:{
      auth: localStorage.getItem('token'),
    }});
    return response.data?.result;
  }
);

//getUser
export const getUsers = createAsyncThunk(
  '/user/getAll',
  async (thunkAPI) => {
    try {
      const response = await axios({
        method: 'get',
        url: API_USERS.getAll,
        headers: {
          auth: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      return response.data.result;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//updateUser
export const updateUser = createAsyncThunk(
  'product/update',
  async (updateUser) => {
    const response = await axios.put(API_USERS.update, updateUser, {
      headers: {
        auth: localStorage.getItem('token'),
      }
    });
    return response.data;
  }
);

//getUserlogs
export const getUserlogs = createAsyncThunk(
  '/userlogs/getAll',
  async (thunkAPI) => {
    try {
      const response = await axios({
        method: 'get',
        url: API_LOGS.getAll,
        headers: {
          auth: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      return response.data.result;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//upload_CSV
export const upload_CSV = createAsyncThunk(
  'user/uploadCSV',
  async (userData, thunkAPI) => {
    try {
      const response = await axios({
        method: 'post',
        url: API_USERS.upload_CSV,
        headers: {
          auth: localStorage.getItem('token'),
        },
        data: userData
      });
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//getUserlogsDate
export const getUserlogsDate = createAsyncThunk(
  '/userlogs/getDate/:start/:end',
  async ({ start, end }, thunkAPI) => {
    try {
      const response = await axios.get(API_LOGS.getUserlogsDate({ start, end }), {
        headers: {
          auth: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      return response.data?.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//getAllBatch
export const getAllBatch = createAsyncThunk(
  '/user/batch/:batch',
  async (thunkAPI) => {
    try {
      const response = await axios({
        method: 'get',
        url: API_USERS.getAllBatch,
        headers: {
          auth: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
      return response.data.results;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);




const usersAPI = createSlice({
  name: 'user',
  initialState: {
    user: [],
    data: [],
    userlogs: [],
    batch: [],
    date: [],
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      // Perform login logic here
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setToken: (state, action) => {
      state.loading = true;
      state.token = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        alert("loginUser.pending")
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        alert("loginUser.fulfilled")
        notification.success({
          title: "Success",
          message: " Login Successfully.",
        })
        state.isLoggedIn = true;
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        alert("loginUser.rejected")
        state.isLoggedIn = false;
        state.user = null;
        state.loading = false;
        state.error = action.payload || 'Unable to login user';
      })
      .addCase(createUser.pending, (state) => {
        alert("createUser.pending")
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        alert("createUser.fulfilled")
        notification.success({
          title: "Success",
          message: "User successfully created.",
        })
        state.status = 'succeeded';
        state.user.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        alert("createUser.rejected")
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllBatch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBatch.fulfilled, (state, action) => {
        state.loading = false;
        state.batch = action.payload;
      })
      .addCase(getAllBatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.userlogs = action.payload;
      })
      .addCase(getUserlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserlogsDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserlogsDate.fulfilled, (state, action) => {
        state.loading = false;
        state.date = action.payload;
        state.userlogs = action.payload;  // set the userlogs state variable
      })
      .addCase(getUserlogsDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getOneUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(upload_CSV.pending, (state) => {
        alert("upload_CSV.pending")
        state.status = 'loading';
        state.error = null;
      })
      .addCase(upload_CSV.fulfilled, (state, action) => {
        alert("upload_CSV.fulfilled")
        notification.success({
          title: "Success",
          message: "CSV Uploaded.",
        })
        state.status = 'succeeded';
        state.user.push(action.payload);
      })
      .addCase(upload_CSV.rejected, (state, action) => {
        alert("upload_CSV.rejected")
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const { login, logout, } = usersAPI.actions;
export default usersAPI.reducer;