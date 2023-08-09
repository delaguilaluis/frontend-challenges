"use client";

import { Box, Card, CardContent, Container, Grid, Switch } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [switches, setSwitches] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  function makeHandler(switchIndex: number) {
    return () => {
      setSwitches(
        switches.map((value, index) => {
          if (index === switchIndex) return !value;
          return Math.random() > 0.5 ? true : false;
        })
      );
    };
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
      <Box className="lg:ml-72">
        <Card sx={{ maxWidth: 392, maxHeight: 400 }}>
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Switch onChange={makeHandler(0)} checked={switches[0]} />
              </Grid>
              <Grid item>
                <Switch onChange={makeHandler(1)} checked={switches[1]} />
              </Grid>
              <Grid item>
                <Switch onChange={makeHandler(2)} checked={switches[2]} />
              </Grid>
              <Grid item>
                <Switch onChange={makeHandler(3)} checked={switches[3]} />
              </Grid>
              <Grid item>
                <Switch onChange={makeHandler(4)} checked={switches[4]} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
