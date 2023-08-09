"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = ["Woah! You found me!", "Please don't run"];
  const buttonTexts = ["Hide back", "Close"];
  const transitionSeconds = 0.3;

  function handleClick(messageIndex?: number) {
    if (messageIndex !== undefined) {
      setMessageIndex(messageIndex);
    }

    setIsOpen(!isOpen);
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box className="lg:ml-72">
          <Button
            variant="contained"
            onClick={() => handleClick(0)}
            sx={{ marginRight: 2 }}
          >
            Search
          </Button>
          <Button variant="contained" onClick={() => handleClick(1)}>
            Run
          </Button>
        </Box>
      </Container>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "black",
          opacity: isOpen ? 0.6 : 0,
          zIndex: isOpen ? 1 : -1,
          transitionProperty: "opacity, z-index",
          transitionDuration: `${transitionSeconds}s`,
        }}
        onClick={() => handleClick()}
      ></Box>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: isOpen ? 288 : 0,
          height: "100vh",
          position: "absolute",
          zIndex: 2,
          top: 0,
          left: "100vw",
          transform: `translateX(-${isOpen ? 288 : 0}px)`,
          transitionDuration: `${transitionSeconds}s`,
          transitionProperty: "width, transform",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginBottom: 2 }}>
            {messages[messageIndex]}
          </Typography>
          <Button variant="contained" onClick={() => handleClick()}>
            {buttonTexts[messageIndex]}
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
