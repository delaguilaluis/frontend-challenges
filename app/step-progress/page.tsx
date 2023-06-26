"use client";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormGroup,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(0);
  const [checks, setChecks] = useState([true, false, false]);

  const descriptions = [
    "Choose title content",
    "Choose description content",
    "Are you happy now?",
    "Ok, we're done. Thanks for sending us your data!",
  ];

  const backButtonDescriptions = ["", "Back", "No, go back"];
  const nextButtonDescriptions = [
    "Submit title",
    "Submit description",
    "Yes, go ahead",
  ];

  const avatarStyle = {
    height: 24,
    width: 24,
    fontSize: 16,
    fontWeight: "bold",
  };

  function handleChange(desiredStep: number) {
    if (desiredStep > step + 1) {
      console.log("not allowed");
      return;
    }

    setStep(desiredStep);
    setChecks(
      checks.map((_, index) => {
        return index <= desiredStep ? true : false;
      })
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
      maxWidth="lg"
    >
      <Card sx={{ maxHeight: 400, minWidth: 392, maxWidth: 504 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<Avatar sx={avatarStyle}>1</Avatar>}
                      checkedIcon={
                        <Avatar sx={{ ...avatarStyle, bgcolor: "#2f7fb7" }}>
                          1
                        </Avatar>
                      }
                      checked={checks[0]}
                      onChange={() => handleChange(0)}
                    />
                  }
                  label="Choose title"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<Avatar sx={avatarStyle}>2</Avatar>}
                      checkedIcon={
                        <Avatar sx={{ ...avatarStyle, bgcolor: "#2f7fb7" }}>
                          2
                        </Avatar>
                      }
                      checked={checks[1]}
                      onChange={() => handleChange(1)}
                    />
                  }
                  label="Choose description"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<Avatar sx={avatarStyle}>3</Avatar>}
                      checkedIcon={
                        <Avatar sx={{ ...avatarStyle, bgcolor: "#2f7fb7" }}>
                          3
                        </Avatar>
                      }
                      checked={checks[2]}
                      onChange={() => handleChange(2)}
                    />
                  }
                  label="Choose data"
                />
              </FormGroup>
            </Grid>
            <Grid item container xs={12} sm={6} alignItems="center">
              <Typography textAlign="center" sx={{ width: "100%" }}>
                {descriptions[step]}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              hidden={
                !backButtonDescriptions[step] && !nextButtonDescriptions[step]
              }
            >
              <Button
                variant="contained"
                hidden={!backButtonDescriptions[step]}
                onClick={() => handleChange(step - 1)}
              >
                {backButtonDescriptions[step]}
              </Button>
              <Button
                variant="contained"
                hidden={!nextButtonDescriptions[step]}
                onClick={() => handleChange(step + 1)}
              >
                {nextButtonDescriptions[step]}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
