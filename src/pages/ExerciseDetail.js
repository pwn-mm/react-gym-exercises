import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  // set exercise detail data from api call
  const [exerciseDetail, setExerciseDetail] = useState({});

  // set youtube search and download videos from api call
  const [exerciseVideos, setExerciseVideos] = useState([]);
  // id of the exercise -> access to the number that we are on the url
  const { id } = useParams();

  // fetch data
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      // api call for youtube search and download
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?q=${exerciseDetail.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
