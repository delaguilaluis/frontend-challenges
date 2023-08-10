"use client";

import { Box, Card, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [scrollTop, setScrollTop] = useState(0);
  const marginTop = scrollTop > 256 ? Math.floor(scrollTop / 8) : 32;

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
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <Box className="lg:ml-72 pt-24" sx={{ minHeight: "200vh" }}>
        <Card sx={{ marginTop, marginBottom: 2, padding: 8 }}></Card>
        <Typography align="center">
          Scroll down to see the card stick.
        </Typography>
        <Typography align="center" sx={{ fontSize: 12 }}>
          This behavior was done with JS rather than CSS.
        </Typography>
      </Box>
    </Container>
  );
}
