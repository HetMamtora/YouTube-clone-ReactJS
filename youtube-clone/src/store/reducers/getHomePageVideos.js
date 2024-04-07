import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {parseData} from '../../utils/parseData';

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext, {getState}) => {
        const {
            youtubeApp: {nextPageToken: nextPageTokenFromState, videos}
        } = getState();

        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="tseries"&key=${API_KEY}&part=snippet&type=video${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`);

        const items = response.data.items;

        // console.log(items);

        const parsedData = await parseData(items);
        return{parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState}

    }
)

//drop x out


/*import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from "../../utils/parseData";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/searchPageVideos",
    async(isNext,{getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos},
        } = getState();
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="Insanely Noob"&key=${API_KEY}&part=snippet&type=video&${
            isNext ? `pageToken=${nextPageTokenFromState}` : ""
          }`);

        console.log(response.data.items);
        const items = response.data.items;
        console.log(items);
        const parsedData = await parseData(items);

        return {parsedData:[...videos,...parsedData],nextPageToken:nextPageTokenFromState}
    }
)*/