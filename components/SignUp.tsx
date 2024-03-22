"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

interface SignUpProps {
  isSignUp: boolean;
  toggleSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ isSignUp, toggleSignUp }) => {
  return (
    <Modal open={isSignUp} onClose={() => toggleSignUp((open) => !open)}>
      <Box className="bg-white center p-10 min-w-[400px] min-h-[500px] flex flex-col items-center">
        <IconButton className="self-end">
          <CloseIcon onClick={() => toggleSignUp((open) => !open)} />
        </IconButton>

        <p className="text-3xl my-10">Join Blog.</p>

        <TextField className="w-full mb-8" label="Email" variant="standard" />

        <TextField
          className="w-full mb-8"
          label="Password"
          variant="standard"
        />

        <TextField
          className="w-full mb-8"
          label="Confirm Password"
          variant="standard"
        />

        <ButtonBase className="text-white bg-black w-full rounded-full py-3 mt-6 mb-10">
          Continue
        </ButtonBase>

        <p>
          Already have an account?{" "}
          <span className="text-[rgb(26,137,23)] font-bold cursor-pointer">
            Sign in
          </span>
        </p>
      </Box>
    </Modal>
  );
};

export default SignUp;
