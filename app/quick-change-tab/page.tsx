"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useState } from "react";
import TabPanel from "@/components/TabPanel";

export default function Page() {
  const [selection, setSelection] = useState(0);
  const [input, setInput] = useState(0);

  function handleCick() {
    if (input > 0 && input < 4) {
      setSelection(input - 1);
    } else {
      alert("Index is invalid");
    }
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
                id="index-input"
                label="Enter tab index"
                variant="standard"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={(e) =>
                  setInput(Number.parseInt(e.target.value, 0) || 0)
                }
                // Show empty string on initial state
                value={input === 0 ? "" : input}
              />
            </Grid>
            <Grid item container xs={5} alignItems="center">
              <Button variant="contained" onClick={handleCick}>
                Change tab
              </Button>
            </Grid>
          </Grid>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginTop: 2,
            }}
          >
            <Tabs
              value={selection}
              onChange={(_, value) => setSelection(value)}
              aria-label="Examples of tabs"
              selectionFollowsFocus
            >
              <Tab label="Positive" />
              <Tab label="Negative" />
              <Tab label="Neutral" />
            </Tabs>
          </Box>
          <TabPanel value={selection} index={0}>
            Positive content
          </TabPanel>
          <TabPanel value={selection} index={1}>
            Negative content
          </TabPanel>
          <TabPanel value={selection} index={2}>
            Neutral content
          </TabPanel>
        </CardContent>
      </Card>
    </Container>
  );
}
