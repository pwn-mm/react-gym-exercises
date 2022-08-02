import { Stack, Typography } from "@mui/material";
import React from "react";
import Icon from "../assets/icons/gym.png";
import Back from "../assets/icons/back.png";
import Cardio from "../assets/icons/cardio.png";
import Chest from "../assets/icons/chest.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={
          item === "back"
            ? Back
            : item === "cardio"
            ? Cardio
            : item === "chest"
            ? Chest
            : Icon
        }
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
