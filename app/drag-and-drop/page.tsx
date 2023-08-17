"use client";

import { Card, Container, SxProps } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const sx: SxProps = {
    paddingX: 4,
    paddingY: 8,
    margin: "auto",
    cursor: "move",
  };

  const isInitialState = !posX && !posY;
  if (!isInitialState) {
    sx.position = "absolute";
    sx.top = posY;
    sx.left = posX;
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        overflow: "scroll",
        height: "100vh",
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        setPosX(e.clientX);
        setPosY(e.clientY);
      }}
    >
      <Card draggable sx={sx}>
        Drag-and-drop me
      </Card>
    </Container>
  );
}
