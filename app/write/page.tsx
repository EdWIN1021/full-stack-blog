"use client";

import React from "react";

// ui
import { Grid, Typography, InputBase } from "@mui/material";
import CustomMarkdown from "@/components/CustomMarkdown";

const page = () => {
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        p={5}
        sx={{
          borderRight: "1px solid #e0e0e0",
          minHeight: `calc(100vh - 64px)`,
        }}
      >
        <Typography variant="subtitle1">Markdown</Typography>

        <InputBase
          sx={{ width: "100%", fontSize: "1.875rem", paddingY: 2 }}
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="h-[calc(100%-76px-21px)] w-full resize-none outline-none border-0"
          value={content}
          placeholder="typing..."
          onChange={(e) => setContent(e.target.value)}
        />
      </Grid>
      <Grid item xs={6} p={5}>
        <Typography variant="subtitle1">Preview</Typography>
        <Typography
          className="min-h-[52.13px]"
          sx={{ fontSize: "1.875rem" }}
          py={2}
        >
          {title}
        </Typography>

        <CustomMarkdown markdown={content} />
      </Grid>
    </Grid>
  );
};

export default page;
