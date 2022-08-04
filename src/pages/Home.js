import React, { useState } from "react";
import { Box } from "@mui/material";

import { HeroBanner, SearchExercises, Exercises } from "../components";

const Home = () => {
  // changes are going to be reflected all across our application that's why we set these state in the Home page
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
