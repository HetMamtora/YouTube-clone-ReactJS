import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../store/reducers/getVideoDetails";

export default function Watch() {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentPlaying = useAppSelector(
  (state) => state,youtubeApp,currentPlaying
  );

  const recommendedVideo = useAppSelector(
    (state) => state.youtubeApp.recommendedVideo
  );

  useEffect(() => {
    if(id){
      dispatch(getVideoDetails(id));
    }
    else{
      navigate("/");
    }
  },[id,navigate,dispatch]);

  useEffect(() => {
    if(currentPlaying && id){
      dispatch(getRecommendedVideos(id))
    }
  },[currentPlaying,dispatch,id]);

  return (
    <div>Watch</div>
  )
}