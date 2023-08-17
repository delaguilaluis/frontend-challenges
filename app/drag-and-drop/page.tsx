"use client";

import { Box, Card, Container, SxProps } from "@mui/material";
import { useRef, useState } from "react";

export default function Page() {
  const [posX, setPosX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const [posY, setPosY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
      onDragOver={(e) => {
        e.preventDefault();
        if (isDragging) {
          console.log(e);
          setPosX(e.pageX - offsetX);
          setPosY(e.pageY - offsetY);
        }
      }}
      onDrop={() => setIsDragging(false)}
    >
      <Box className="lg:ml-72 my-auto">
        <Card
          draggable
          onDragStart={(e) => {
            setIsDragging(true);
            const defaultRect = {
              top: 0,
              left: 0,
            };

            const rect =
              cardRef.current?.getBoundingClientRect() || defaultRect;
            setOffsetX(e.clientX - rect.left);
            setOffsetY(e.clientY - rect.top);
          }}
          sx={sx}
          ref={cardRef}
        >
          Drag-and-drop me
        </Card>
      </Box>
    </Container>
  );
}
