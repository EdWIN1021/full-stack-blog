"use client";

import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const top100Films = [{ title: "java" }];

const Topics = () => {
  // disable when > 5
  return (
    <Autocomplete
      multiple
      limitTags={5}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} placeholder="Add a topic..." />
      )}
    />
  );
};

export default Topics;
