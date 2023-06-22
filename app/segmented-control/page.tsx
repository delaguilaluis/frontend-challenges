"use client";

import {
  Container,
  FormControl,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

export default function Page() {
  const [selection, setSelection] = useState("price");
  // TODO: read this from the theme
  const isMobile = useMediaQuery("(max-width:600px)");

  function handleChange(event: React.MouseEvent<HTMLElement>, value: string) {
    setSelection(value);
  }

  function handleSelectChange(event: SelectChangeEvent) {
    setSelection(event.target.value);
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
      <Typography
        variant="h2"
        sx={{ fontSize: 20, textAlign: "center", marginBottom: 3 }}
      >
        This UI changes depending on the screen size
      </Typography>
      {isMobile && (
        <FormControl fullWidth>
          <Select
            value={selection}
            onChange={handleSelectChange}
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value="price">Sort by price</MenuItem>
            <MenuItem value="name">Sort by name</MenuItem>
            <MenuItem value="relevance">Sort by relevance</MenuItem>
          </Select>
        </FormControl>
      )}
      {!isMobile && (
        <ToggleButtonGroup
          exclusive
          color="primary"
          value={selection}
          onChange={handleChange}
          aria-label="Platform"
          sx={{ backgroundColor: "white" }}
        >
          <ToggleButton value="price">Sort by price</ToggleButton>
          <ToggleButton value="name">Sort by name</ToggleButton>
          <ToggleButton value="relevance">Sort by relevance</ToggleButton>
        </ToggleButtonGroup>
      )}
    </Container>
  );
}
