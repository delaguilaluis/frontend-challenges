"use client";

import { Box, Card, Container, Button } from "@mui/material";
import { RefObject, useEffect, useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Page() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const parent = useRef<HTMLDivElement>(null);
  const [leftScroll, setLeftScroll] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  type Card = {
    minWidth: number;
    backgroundColor: string;
    ref?: RefObject<HTMLDivElement>;
  };

  const cards: Card[] = [
    {
      minWidth: 120,
      backgroundColor: "#000000",
    },
    {
      minWidth: 160,
      backgroundColor: "#CCCCCC",
    },
    {
      minWidth: 240,
      backgroundColor: "#888888",
    },
    {
      minWidth: 120,
      backgroundColor: "#000000",
    },
    {
      minWidth: 240,
      backgroundColor: "#888888",
    },
    {
      minWidth: 160,
      backgroundColor: "#CCCCCC",
    },
    {
      minWidth: 160,
      backgroundColor: "#CCCCCC",
    },
    {
      minWidth: 120,
      backgroundColor: "#000000",
    },
  ];

  cards.forEach((c) => {
    c.ref = useRef<HTMLDivElement>(null);
  });

  const baseCardStyle = {
    padding: 2,
    marginX: 1,
    minHeight: 240,
  };

  const maxWidth = isMobile ? 320 : 640;
  const paddingX = 1;
  const scrollLeftMax =
    paddingX * 8 * 2 -
    maxWidth +
    cards.reduce(
      (accum, c) => accum + c.minWidth + baseCardStyle.marginX * 8 * 2,
      0
    );

  function makeCard(index: number) {
    return (
      <Card
        key={index}
        ref={cards[index].ref}
        sx={{
          ...baseCardStyle,
          minWidth: cards[index].minWidth,
          backgroundColor: cards[index].backgroundColor,
        }}
      ></Card>
    );
  }

  useEffect(() => {
    parent.current?.scroll({ left: leftScroll });
  }, [leftScroll]);

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
      <Box
        className="lg:ml-72 my-auto"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Button
          variant="contained"
          sx={{
            alignSelf: "start",
            marginBottom: -20,
            marginLeft: -2,
            paddingY: 2,
            minWidth: 2,
            borderRadius: "50%",
          }}
          onClick={() => {
            if (leftScroll > 0) {
              setCurrentCard((current) => current - 1);
              setLeftScroll((current) => {
                const valToSub =
                  cards[currentCard - 1].minWidth +
                  baseCardStyle.marginX * 8 * 2;
                return current - valToSub;
              });
            }
          }}
        ></Button>
        <Card
          ref={parent}
          id="parent"
          sx={{
            paddingX,
            maxWidth,
            paddingY: 2,
            display: "flex",
          }}
        >
          {Array.from({ length: cards.length }).map((_, idx) => makeCard(idx))}
        </Card>
        <Button
          variant="contained"
          sx={{
            alignSelf: "end",
            marginTop: -18,
            marginRight: -2,
            padding: 2,
            minWidth: 2,
            borderRadius: "50%",
          }}
          onClick={() => {
            if (leftScroll < scrollLeftMax) {
              setCurrentCard((current) => current + 1);
              setLeftScroll((current) => {
                const valToAdd =
                  cards[currentCard].minWidth + baseCardStyle.marginX * 8 * 2;
                return current + valToAdd;
              });
            }
          }}
        ></Button>
      </Box>
    </Container>
  );
}
