import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";
import { notification } from 'antd';
import { API_PRODUCTS } from '../constants/api';

//createProduct
export const createProduct = createAsyncThunk(
  'product/create',
  async (productData, thunkAPI) => {
    try {
      // const response = await axios{post('https://fakestoreapi.com/products', product)};
      const response = await axios({
        method: 'post',
        url: API_PRODUCTS.create,
        headers: {
          auth: localStorage.getItem('token'),
        },
        data: productData

      });
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//getProducts
export const getProducts = createAsyncThunk(
  'product/getAll',
  async (thunkAPI) => {
    try {
      const response = await axios({
        method: 'get',
        url: API_PRODUCTS.getAll,
        headers: {
          auth: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }

      });
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//getOne
export const getOne = createAsyncThunk(
  'product/getOne/:product_id',
  async (product_id,) => {
    const response = await axios.get(API_PRODUCTS.getOne(product_id), {
      headers: {
        auth: localStorage.getItem('token'),
      }
    });
    console.log("🚀 ~ file: productSlice.jsx:65 ~ response:", response)
    return response.data?.result;

  }

);

//deleteOneProduct
export const deleteOneProduct = createAsyncThunk(
  'product/deleteOne/:product_id',
  async (product_id, {dispatch}) => {
    console.log("🚀 ~ file: productSlice.jsx:108 ~ product_id:", product_id)
    try {
      const response = await axios.delete(`/inventory/product/deleteOne/${product_id}`, {
        headers: {
          auth: localStorage.getItem('token'),
        },
      });
      console.log("🚀 ~ file: productSlice.jsx:80 ~ response:", response)
      if (response) {
       dispatch(getProducts())
        return response.data?.result;
      }
    } catch (error) {

    }

  }
);


//updateProduct
export const updateProduct = createAsyncThunk(
  'product/update',
  async (updatedProduct) => {
    const response = await axios.put(`/inventory/product/update`, updatedProduct, {
      headers: {
        auth: localStorage.getItem('token'),
      }
    });
    return response.data.result;
  }
);

//getProductDate
export const getProductDate = createAsyncThunk(
  '/product/getDate/:start/:end',
  async ({ start, end }, thunkAPI) => {
    try {
      const response = await axios.get(API_PRODUCTS.getDate({ start: start, end: end }), {
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

//getAllCategory
export const getAllCategory = createAsyncThunk(
  'product/getAllCategory/product_category',
  async () => {
    const response = await axios.get(API_PRODUCTS.getCategory, {
      headers: {
        auth: localStorage.getItem('token'),
      }
    });
    return response.data?.results;

  }

);

export const upload_CSV = createAsyncThunk(
  'product/uploadCSV',
  async (productData, thunkAPI) => {
    try {
      const response = await axios({
        method: 'post',
        url: API_PRODUCTS.upload_CSV,
        headers: {
          auth: localStorage.getItem('token'),
        },
        data: productData
      });
      return response.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cartItems: [],
    item: [],
    categories: [],
    date: [],
    count: 0,
    product: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchProductsStart: state => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      console.log("🚀 ~ file: productSlice.jsx:38 ~ action:", action)
      console.log({ state: state?.products })
      // check if existing in cart
      const existingIndex = state.cartItems.findIndex(
        (item) => item.product_id === action.payload.product_id
      );
      console.log("🚀 ~ file: productSlice.jsx:42 ~ existingIndex:", existingIndex)
      //if exisiting in cart increase quantity of item
      if (existingIndex >= 0) {
        alert("existing")
        state.cartItems[existingIndex].quantity += action?.payload?.quantity;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        //else add new item
        alert("new item")
        let tempProductItem = { ...action.payload };
        state?.cartItems?.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].quantity += 1;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.product));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("🚀 ~ file: productSlice.jsx:82 ~ decreaseCart ~ itemIndex:", itemIndex)
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCart;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.product));
    },
    removeFromCart: (state, action) => {
      state.product = state.product.filter(item => item.id !== action.payload);
    },
    getTotals(state, action) {
      let { total, quantity } = state.product.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setProduct: (state, action) => {
      console.log("🚀 ~ file: productSlice.jsx:224 ~ action:", action)
      state.product = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        alert("createProduct.pending")
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        alert("createProduct.fulfilled")
        notification.success({
          title: "Success",
          message: "Product created.",
        })

        state.status = 'succeeded';
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        alert("createProduct.rejected")
        state.status = 'failed';
        state.error = action.payload;
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
        state.products.push(action.payload);
      })
      .addCase(upload_CSV.rejected, (state, action) => {
        alert("upload_CSV.rejected")
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOne.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOne.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(getOne.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getAllCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductDate.fulfilled, (state, action) => {
        state.loading = false;
        state.date = action.payload;
        state.products = action.payload; // update products field
      })
      
      .addCase(getProductDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteOneProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteOneProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteOneProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCart, decreaseCart, removeFromCart, getTotals, increaseCart } = productSlice.actions;
export const fetchProducts = () => async dispatch => {
  try {
    dispatch(fetchProductsStart());
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
export default productSlice.reducer;