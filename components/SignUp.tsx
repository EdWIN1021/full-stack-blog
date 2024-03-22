"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

interface SignUpProps {
  isSignUp: boolean;
  toggleSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({
  isSignUp,
  toggleSignUp,
  toggleSignIn,
}) => {
  return (
    <Modal open={isSignUp} onClose={() => toggleSignUp((open) => !open)}>
      <Box className="bg-white center p-10 min-w-[400px] min-h-[500px] flex flex-col items-center">
        <IconButton
          className="self-end"
          onClick={() => toggleSignUp((open) => !open)}
        >
          <CloseIcon />
        </IconButton>

        <form>
          <p className="text-3xl my-8 font-medium">Join Blog.</p>

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

          <div className="flex flex-col gap-3 w-full mt-5 mb-10">
            <ButtonBase className="text-white bg-black rounded-full py-3">
              <div className="flex gap-3 items-center min-w-[150px]">
                <EmailOutlinedIcon />
                <span>Sign up with Email</span>
              </div>
            </ButtonBase>

            <ButtonBase className="border border-black border-solid rounded-full py-3">
              <div className="flex gap-3 items-center min-w-[150px]">
                <Image src="/google.svg" width={20} height={20} alt="google" />
                <span>Sign up with Google</span>
              </div>
            </ButtonBase>

            <ButtonBase className="border border-black border-solid rounded-full py-3">
              <div className="flex gap-3 items-center min-w-[150px]">
                <Image src="/github.svg" width={20} height={20} alt="github" />
                <span> Sign up with Github</span>
              </div>
            </ButtonBase>
          </div>

          <p>
            Already have an account?{" "}
            <span
              className="text-[rgb(26,137,23)] font-bold cursor-pointer"
              onClick={() => {
                toggleSignUp((open) => !open);
                toggleSignIn((open) => !open);
              }}
            >
              Sign in
            </span>
          </p>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUp;
