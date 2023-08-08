"use client";

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import AnimatedAvatar from "@/components/AnimatedAvatar";

type Dot = {
  id: number;
  remaining: number;
  isBig: boolean;
};

export default function Page() {
  const [seconds, setSeconds] = useState(5);
  const [id, setID] = useState(1);
  const [dots, setDots] = useState<Dot[]>([]);

  function onClick() {
    if (!seconds) return;

    setDots([...dots, { id, remaining: seconds, isBig: false }]);

    const secondsTimer = setInterval(() => {
      setDots((dots) => {
        return dots
          .map((dot) => {
            if (dot.id !== id) return dot;
            return { ...dot, remaining: dot.remaining - 1 };
          })
          .filter((dot) => {
            return dot.id !== id || dot.remaining >= 0;
          });
      });
    }, 1000);

    const bouncingTimer = setInterval(() => {
      setDots((dots) => {
        return dots.map((dot) => {
          if (dot.id !== id) return dot;
          return { ...dot, isBig: !dot.isBig };
        });
      });
    }, 500);

    // Remove the timer 1 second after boiling
    // Consider an extra second for popping animation
    const delay = (seconds + 2) * 1000;
    setTimeout(() => {
      clearInterval(secondsTimer);
      clearInterval(bouncingTimer);
    }, delay);

    setID(id + 1);
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      maxWidth="lg"
    >
      <Card sx={{ maxWidth: 392, maxHeight: 400 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <TextField
                id="timer-input"
                label="Enter boiling timer"
                variant="standard"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSeconds(Number.parseInt(event.target.value, 10));
                }}
                value={seconds || 0}
              />
            </Grid>
            <Grid item container xs={5} alignItems="center">
              {/* TODO: Check why it renders with bg-color white */}
              <Button variant="contained" onClick={onClick}>
                Start boiling
              </Button>
            </Grid>
            {dots.map((dot, index) => {
              return (
                <Grid item xs={2} key={index}>
                  <AnimatedAvatar
                    sx={{ bgcolor: "#fd9545", fontWeight: "bold" }}
                    isBig={dot.isBig}
                    isPopping={dot.remaining === 0}
                  >
                    {dot.remaining === 0 ? "1" : dot.remaining.toString()}
                  </AnimatedAvatar>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
