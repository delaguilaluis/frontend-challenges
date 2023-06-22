"use client";

import { Container, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
      maxWidth="lg"
    >
      <Typography variant="h1" sx={{ fontSize: 24, textAlign: "center" }}>
        These are solutions to Front-end Challenges from{" "}
        <Link
          underline="hover"
          color="#666666"
          href="https://frontendmentor.io"
        >
          FrontendMentor.io
        </Link>{" "}
        and{" "}
        <Link underline="hover" color="#666666" href="https://frontloops.io">
          Frontloops.io
        </Link>
        .<br></br> <br></br>
        Please select one from the menu to get started.
      </Typography>
    </Container>
  );
}
