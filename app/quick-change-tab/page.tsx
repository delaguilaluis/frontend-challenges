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
  const [textInput, setTextInput] = useState("");

  function handleCick() {
    const input = Number.parseInt(textInput, 0);
    if (Number.isNaN(input) || input < 1 || input > 3) {
      alert("Index is invalid");
    } else {
      setSelection(input - 1);
    }
  }

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
      <Card sx={{ maxWidth: 392, maxHeight: 400 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <TextField
                id="index-input"
                label="Enter tab index"
                variant="standard"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={(e) => setTextInput(e.target.value)}
                value={textInput}
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
