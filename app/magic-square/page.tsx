"use client";

import { Box, Container, Card, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const xHalf = window.innerWidth / 2;
  const yHalf = window.innerHeight / 2;
  const degreesRatio = 0.03;

  const [x, setX] = useState(xHalf);
  const [y, setY] = useState(yHalf);
  const yDegrees = Math.floor((x - xHalf) * degreesRatio);
  const xDegrees = Math.floor((y - yHalf) * degreesRatio) * -1;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      onMouseMove={(event) => {
        setX(event.nativeEvent.pageX);
        setY(event.nativeEvent.pageY);
      }}
    >
      <Box sx={{ width: 240, height: 240, perspective: "1000px" }}>
        <Card
          sx={{
            width: "100%",
            height: "100%",
            transform: `rotateY(${yDegrees}deg) rotateX(${xDegrees}deg)`,
          }}
        ></Card>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ fontSize: 24, mt: 3 }}
        >
          Move the cursor around the square
        </Typography>
      </Box>
    </Container>
  );
}
