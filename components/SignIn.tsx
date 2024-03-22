"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ButtonBase, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface SignInProps {
  isSignIn: boolean;
  toggleSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({ isSignIn, toggleSignIn }) => {
  return (
    <Modal open={isSignIn} onClose={() => toggleSignIn((open) => !open)}>
      <Box className="bg-white center p-10 min-w-[400px] min-h-[500px] flex flex-col items-center">
        <IconButton
          className="self-end"
          onClick={() => toggleSignIn((open) => !open)}
        >
          <CloseIcon />
        </IconButton>

        <p className="text-3xl my-10">Welcome back.</p>

        <TextField className="w-full mb-8" label="Email" variant="standard" />

        <TextField
          className="w-full mb-8"
          label="Password"
          variant="standard"
        />

        <ButtonBase className="text-white bg-black w-full rounded-full py-3 my-10">
          Continue
        </ButtonBase>

        <p>
          No account?{" "}
          <span className="text-[rgb(26,137,23)] font-bold cursor-pointer">
            Create one
          </span>
        </p>
      </Box>
    </Modal>
  );
};

export default SignIn;
