"use client";

import { Container, Card, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const width = 300;
  const height = 300;
  const [x, setX] = useState(width / 2);
  const [y, setY] = useState(height / 2);
  const degreesRatio = 0.075;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        perspective: "1000px",
      }}
      maxWidth="lg"
    >
      <Typography variant="h1" textAlign="center" sx={{ fontSize: 24, mb: 3 }}>
        Move the cursor over the square
      </Typography>
      <Card
        sx={{
          minWidth: width,
          minHeight: height,
          transform: `rotateX(${(height / 2 - y) * degreesRatio}deg)
          rotateY(${(x - width / 2) * degreesRatio}deg)`,
        }}
        onMouseMove={(event) => {
          setX(event.nativeEvent.offsetX);
          setY(event.nativeEvent.offsetY);
        }}
      ></Card>
    </Container>
  );
}
