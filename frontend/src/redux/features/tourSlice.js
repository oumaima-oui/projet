import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import * as api from "../api";

//createTour
export const createTour = createAsyncThunk(
    "tour/createTour",
     async({updatedTourData, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.createTour(updatedTourData);
        toast.success("tour Added successFuly");
        navigate('/');
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
//get Tours
export const getTours = createAsyncThunk(
    "tour/getTours",
    async (page, { rejectWithValue }) => {
      try {
        const response = await api.getTours(page);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
);

//get Tour
export const getTour = createAsyncThunk(
    "tour/getTour",
     async(id,{rejectWithValue}) => {
    try {
        const response = await api.getTour(id);
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
//getToursByUser
export const getToursByUser = createAsyncThunk(
    "tour/getToursByUser",
     async(userId,{rejectWithValue}) => {
    try {
        const response = await api.getToursByUser(userId);
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
//deleteTour
export const deleteTour = createAsyncThunk(
    "tour/deleteTour",
     async({id,toast},{rejectWithValue}) => {
    try {
        const response = await api.deleteTour(id);
        toast.success("Tour deleted Successfully")
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
//updateTour
export const updateTour = createAsyncThunk(
    "tour/updateTour",
     async({id,updatedTourData ,toast,navigate},{rejectWithValue}) => {
    try {
        const response = await api.updateTour(updatedTourData, id);
        toast.success("Tour updated Successfully");
        navigate('/');
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});
//getTourBySearch
export const searchTours = createAsyncThunk(
    "tour/searchTours",
    async (searchQuery, { rejectWithValue }) => {
      try {
        const response = await api.getToursBySearch(searchQuery);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
);
//getTourByTag
export const getToursByTag = createAsyncThunk(
    "tour/getToursByTag",
    async (tag, { rejectWithValue }) => {
      try {
        const response = await api.getTagTours(tag);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
);
//getReletedTours
export const getRelatedTours = createAsyncThunk(
    "tour/getRelatedTours",
    async (tags, { rejectWithValue }) => {
      try {
        const response = await api.getRelatedTours(tags);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
);
//getTourLike
export const likeTour = createAsyncThunk(
    "tour/likeTour",
     async({ _id },{ rejectWithValue }) => {
    try {
        const response = await api.likeTour(_id);
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
}
);

const tourSlice = createSlice({
    name: 'tour',
    initialState: {
        tour: {},
        tours: [],
        tagTours:[],
        relatedTours:[],
        currentPage: 1,
        numberOffPages: null,
        userTours: [],
        error: "",
        loading: false,
    },
    reducers: {
      setCurrentPage: (state, action) => {
          state.currentPage = action.payload;
      }
    },
    extraReducers: {
        //createTour
        [createTour.pending]: (state, action) => {
            state.loading = true;
        },
        [createTour.fulfilled]: (state, action) => {
            state.loading = false;
           state.tours = [action.payload];
        },
        [createTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //getallTours
        [getTours.pending]: (state, action) => {
            state.loading = true;
        },
        [getTours.fulfilled]: (state, action) => {
            state.loading = false;
            state.tours = action.payload.data;
            state.numberOfPages = action.payload.numberOfPages;
            state.currentPage = action.payload.currentPage;
        },
        [getTours.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //get Tour
        [getTour.pending]: (state, action) => {
            state.loading = true;
        },
        [getTour.fulfilled]: (state, action) => {
            state.loading = false;
           state.tour = action.payload;
        },
        [getTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
         //getToursByUser
         [getToursByUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getToursByUser.fulfilled]: (state, action) => {
            state.loading = false;
           state.userTours = action.payload;
        },
        [getToursByUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
         //deleteTour
         [deleteTour.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteTour.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("action", action);
            const {arg : {id}} = action.meta;
            if(id) {
                state.userTours = state.userTours.filter((item) => item._id !== id);
                state.tours = state.tours.filter((item) => item._id !== id);

            }
        },
        [deleteTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //updateTour
        [updateTour.pending]: (state, action) => {
            state.loading = true;
        },
        [updateTour.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                arg : {id},
            } = action.meta;
            if(id) {
                state.userTours = state.userTours.map((item) =>
                  item._id === id ? action.payload :item
                );
                state.tours = state.tours.map((item) => 
                  item._id === id ? action.payload :item
                );

            }
        },
        [updateTour.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //getSearchTours
        [searchTours.pending]: (state, action) => {
            state.loading = true;
        },
        [searchTours.fulfilled]: (state, action) => {
            state.loading = false;
            state.tours = action.payload;
        },
        [searchTours.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //getTourByTag
        [getToursByTag.pending]: (state, action) => {
            state.loading = true;
        },
        [getToursByTag.fulfilled]: (state, action) => {
            state.loading = false;
            state.tagTours = action.payload;
        },
        [getToursByTag.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //getRelatedTours
        [getRelatedTours.pending]: (state, action) => {
          state.loading = true;
        },
        [getRelatedTours.fulfilled]: (state, action) => {
            state.loading = false;
            state.relatedTours = action.payload;
        },
        [getRelatedTours.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        //getLikeTour
        [likeTour.pending]: (state, action) => {},
        [likeTour.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                arg : { _id },
            } = action.meta;
            if( _id ) {
                state.tours = state.tours.map((item) => 
                  item._id === _id ? action.payload :item
                );
            }
        },
        [likeTour.rejected]: (state, action) => {
            state.error = action.payload.message;
        },
    },
});
export const { setCurrentPage } = tourSlice.actions;


export default tourSlice.reducer;