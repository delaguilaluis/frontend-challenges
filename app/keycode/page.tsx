"use client";

import {
  Box,
  Button,
  Card,
  Container,
  InputBaseComponentProps,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FocusEvent, createRef } from "react";

const inputStyle = {
  width: 40,
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
};

const inputProps: InputBaseComponentProps = {
  maxLength: 1,
  inputMode: "numeric",
};

export default function Page() {
  const inputRefs = Array.from({ length: 6 }).map(() => {
    return createRef<HTMLInputElement>();
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const id = Number.parseInt(event.currentTarget.id.split("input-")[1]);

    // Filling
    const value = event.currentTarget.value;
    if (value !== "") {
      if (id >= inputRefs.length - 1) return;
      const nextInput = inputRefs[id + 1].current;
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
    } else {
      // Deleting
      if (id === 0) return;
      const prevInput = inputRefs[id - 1].current;
      if (prevInput) {
        prevInput.focus();
        prevInput.select();
      }
    }
  }

  function handleFocus(event: FocusEvent<HTMLInputElement>) {
    if (event.currentTarget.value.length) return;
    const current = Number.parseInt(event.currentTarget.id.split("input-")[1]);
    if (current === 0) return;
    const prevInput = inputRefs[current - 1].current;
    if (prevInput && !prevInput.value) prevInput.focus();
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
    >
      <Box className="lg:ml-72 my-auto">
        <Card sx={{ padding: 2 }}>
          <Container>
            <Typography align="center" sx={{ fontSize: 24, marginY: 2 }}>
              Enter code:
            </Typography>
          </Container>
          <Container>
            <TextField
              sx={inputStyle}
              inputProps={inputProps}
              id="input-0"
              inputRef={inputRefs[0]}
              variant="outlined"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <TextField
              sx={inputStyle}
              inputProps={inputProps}
              id="input-1"
              inputRef={inputRefs[1]}
              variant="outlined"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <TextField
              sx={inputStyle}
              inputProps={inputProps}
              id="input-2"
              inputRef={inputRefs[2]}
              variant="outlined"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <Typography
              sx={{ fontSize: 36, display: "inline-block", marginX: 1 }}
            >
              -
            </Typography>
            <TextField
              sx={inputStyle}
              inputProps={inputProps}
              id="input-3"
              inputRef={inputRefs[3]}
              variant="outlined"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <TextField
              sx={inputStyle}
              inputProps={inputProps}
              id="input-4"
              inputRef={inputRefs[4]}
              variant="outlined"
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <TextField
              sx={inputStyle}
              inputProps={inputProps}
              id="input-5"
              inputRef={inputRefs[5]}
              variant="outlined"
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </Container>
          <Container
            sx={{ display: "flex", justifyContent: "center", marginY: 2 }}
          >
            <Button
              variant="contained"
              onClick={() => {
                const value = inputRefs
                  .map((input) => input.current?.value)
                  .join("");

                alert(`Value is ${value}`);
              }}
            >
              Submit
            </Button>
          </Container>
        </Card>
      </Box>
    </Container>
  );
}
