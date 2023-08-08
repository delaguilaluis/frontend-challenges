"use client";

import { Container, Card, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [rectanglesQuantity, setRectanglesQuantity] = useState(3);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleIntersect(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setRectanglesQuantity((current) => current + 1);
      }
    });
  }

  useEffect(() => {
    const options = {
      root: null,
      threshold: [0.5],
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [rectanglesQuantity]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      maxWidth="lg"
      className="pt-20 lg:pt-5"
    >
      <Typography variant="h1" textAlign="center" sx={{ fontSize: 24, mb: 3 }}>
        Keep scrolling down...
      </Typography>
      {Array.from({ length: rectanglesQuantity }).map((_, index) => {
        return (
          <Card
            key={index}
            sx={{
              minWidth: 375,
              minHeight: 400,
              marginBottom: 2,
            }}
            ref={cardRef}
          ></Card>
        );
      })}
    </Container>
  );
}
