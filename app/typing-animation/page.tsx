"use client";

import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Page() {
  const baseText = "We can help you with";
  const [text, setText] = useState(baseText);
  const [labelIndex, setLabelIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const labels = ["design", "frontend", "backend", "testing"];

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused) {
        setIsPaused(false);
        return;
      }

      const wordPart = labels[labelIndex].substring(0, letterIndex);
      const cursor = letterIndex % 2 === 0 ? "" : "|";
      setText(`${baseText} ${wordPart} ${cursor}`);
      setLetterIndex(letterIndex + 1);

      if (letterIndex === labels[labelIndex].length) {
        setLabelIndex((labelIndex + 1) % labels.length);
        setLetterIndex(0);
        setIsPaused(true);
      }
    }, 150);

    return () => clearInterval(timer);
  });

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      maxWidth="lg"
    >
      <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: 36 }}>
        {text}
      </Typography>
    </Container>
  );
}
