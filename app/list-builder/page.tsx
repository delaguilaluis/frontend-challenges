"use client";

import {
  Box,
  Card,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [display, setDisplay] = useState("");

  const items = useMemo(
    () => ["Check all", "Ice cream", "Hot dog", "Popcorn", "Cookie"],
    []
  );

  useEffect(() => {
    if (selectedIndices.length < 1) {
      setDisplay("Please select your food");
      return;
    }

    const beggining = selectedIndices
      .slice(0, 2)
      .map((si) => items[si])
      .join(", ");

    if (selectedIndices.length <= 2) {
      setDisplay(beggining);
    } else {
      const remainingQuantity = selectedIndices.length - 2;
      setDisplay(`${beggining} and ${remainingQuantity} more`);
    }
  }, [selectedIndices, items]);

  function handleClick(index: number) {
    setSelectedIndices((current) => {
      if (current.includes(index)) {
        return current.filter((i) => i !== index);
      }

      return [...current, index];
    });
  }

  function handleSelectAll() {
    setSelectedIndices((current) => {
      if (current.length === 4) {
        return [];
      }

      return [1, 2, 3, 4];
    });
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
        <Card sx={{ padding: 2, minWidth: 280 }}>
          <Typography>{display}</Typography>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndices.length === 4}
              onClick={handleSelectAll}
            >
              <ListItemText
                sx={{ "& .MuiListItemText-primary": { fontWeight: "bold" } }}
                primary={items[0]}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndices.includes(1)}
              onClick={() => handleClick(1)}
            >
              <ListItemText primary={items[1]} />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndices.includes(2)}
              onClick={() => handleClick(2)}
            >
              <ListItemText primary={items[2]} />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndices.includes(3)}
              onClick={() => handleClick(3)}
            >
              <ListItemText primary={items[3]} />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndices.includes(4)}
              onClick={() => handleClick(4)}
            >
              <ListItemText primary={items[4]} />
            </ListItemButton>
          </List>
        </Card>
      </Box>
    </Container>
  );
}
