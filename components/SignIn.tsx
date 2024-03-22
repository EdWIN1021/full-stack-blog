"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Button,
  ButtonBase,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
interface SignInProps {
  isSignIn: boolean;
  toggleSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({
  isSignIn,
  toggleSignIn,
  toggleSignUp,
}) => {
  return (
    <Modal open={isSignIn} onClose={() => toggleSignIn((open) => !open)}>
      <div className="bg-white center p-10 min-w-[400px] min-h-[500px] flex flex-col ">
        <IconButton
          className="self-end"
          onClick={() => toggleSignIn((open) => !open)}
        >
          <CloseIcon />
        </IconButton>

        <form>
          <Typography variant="h4" fontWeight={500} textAlign={"center"}>
            Welcome back.
          </Typography>

          <Stack spacing={3} mt={6}>
            <TextField label="Email" variant="standard" color="secondary" />

            <TextField label="Password" variant="standard" color="secondary" />
          </Stack>

          <Stack spacing={2} mt={8} mb={6}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailOutlinedIcon />}
            >
              Sign in with Email
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={
                <Image src="/google.svg" width={20} height={20} alt="google" />
              }
              fullWidth
            >
              Sign in with Google
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={
                <Image src="/github.svg" width={20} height={20} alt="github" />
              }
            >
              Sign in with Github
            </Button>
          </Stack>

          <p className="text-center">
            No account?{" "}
            <span
              className="text-[rgb(26,137,23)] font-bold cursor-pointer"
              onClick={() => {
                toggleSignUp((open) => !open);
                toggleSignIn((open) => !open);
              }}
            >
              Create one
            </span>
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default SignIn;
