import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cookie from "react-cookies";
import { toast } from "react-toastify";
const url = process.env.REACT_APP_URL;

// get all
export const getAllItems = createAsyncThunk(
  "items/getAllItems",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      let response = await axios.get(`${url}/item`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

// get one item by id
export const getOneItem = createAsyncThunk("items/getOneItem", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.get(`${url}/item/${id}`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

//// delete selected item
export const deleteOneItem = createAsyncThunk(
  "items/deleteOneItem",
  async (id, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      let response = await axios.delete(`${url}/item/${id}`, {
        headers: {
          authorization: `Bearer ${cookie.load("token")}`,
        },
      });
  
      // dispatch(getMyItems());
      return id;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Add item
export const addItem = createAsyncThunk("items/addItem", async (arg, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const req = await axios.post(`${url}/item`, arg, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return req.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Edit Item
export const updateItem = createAsyncThunk("items/updateItem", async (data, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;
  try {
    const res = await axios.put(`${url}/item/${data.id}`, data, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    dispatch(getMyItems());
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// My items
export const getMyItems = createAsyncThunk("items/getMyItems", async (data, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    let response = await axios.get(`${url}/myItems`, {
      headers: {
        authorization: `Bearer ${cookie.load("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

const initialState = {
  allItems: [],
  oneItem: [],
  myItems: [],
  isLoading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    // **********getAllItems**********
    [getAllItems.fulfilled]: (state, action) => {
      state.allItems = action.payload;
      state.isLoading = false;
      state.oneItem = [];
      state.error = null;
    },
    [getAllItems.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllItems.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
     
    },
  
    //**************get One Item******** */
    [getOneItem.fulfilled]: (state, action) => {
      state.oneItem = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getOneItem.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getOneItem.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      // state.allServices = []
    },

    //****************post****************
    [addItem.fulfilled]: (state, action) => {
        state.allItems.push(action.payload);
      state.isLoading = false;
      toast.success(`Added ${action.payload.name} successfully`);
    },
    [addItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addItem.rejected]: (state, action) => {
       state.isLoading = false;
        toast.error(`${action.payload}`);
        state.error = action.payload;
    
    },

    //****************Edit****************
    [updateItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.success(`Edit Successfully`, { autoClose: false });
    },
    [updateItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateItem.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(`${action.payload}`);
      state.error = action.payload;
    },

    //**************my items****************** */
    [getMyItems.fulfilled]: (state, action) => {
      state.myItems = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [getMyItems.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getMyItems.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //************************* delete item///////////////*/
    [deleteOneItem.fulfilled]: (state, action) => {
      state.allItems = state.allItems.filter((ele) => ele.id !== action.payload);
      state.isLoading = false;
      state.error = null;
      toast.success(`Deleted successfully`);
    },
    [deleteOneItem.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteOneItem.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default itemsSlice.reducer;
