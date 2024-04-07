import {createSlice} from '@reduxjs/toolkit';
import { getHomePageVideos } from '../../store/reducers/getHomePageVideos';

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:" ",
    searchResults: [],
    nextPageToken: null,
    recommendedVideo:[]
};

const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
    },

    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            //updating old videos state by state
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
    }
})

export default youtubeSlice.reducer;

/*import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
//import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
//import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
//import { getVideoDetails } from "../../store/reducers/getVideoDetails";

const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm:"",
    searchResults:[],
    nextPageToken:null,
    recommendedVideo:[]
};


const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=> {
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData;
                state.nextPageToken = action.payload.nextPageToken;
            }
        })
    }
})

export default youtubeSlice.reducer;*/