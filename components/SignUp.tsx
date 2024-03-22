"use client";

import * as React from "react";
import Image from "next/image";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/signup", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  }
  return (
    <Modal open={isSignUp} onClose={() => toggleSignUp((open) => !open)}>
      <div className="bg-white center p-10 min-w-[400px] min-h-[500px] flex flex-col">
        <IconButton
          className="self-end"
          onClick={() => toggleSignUp((open) => !open)}
        >
          <CloseIcon />
        </IconButton>

        <form onSubmit={onSubmit}>
          <Typography variant="h4" fontWeight={500} textAlign={"center"}>
            Join Blog.
          </Typography>

          <Stack spacing={3} mt={6}>
            <TextField
              label="Email"
              variant="standard"
              color="secondary"
              type="email"
              name="email"
            />

            <TextField
              label="Password"
              variant="standard"
              color="secondary"
              type="password"
              name="password"
            />

            <TextField
              label="Confirm Password"
              variant="standard"
              color="secondary"
              type="confirmPassword"
              name="confirmPassword"
            />
          </Stack>

          <Stack spacing={2} mt={8} mb={6}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailOutlinedIcon />}
              type="submit"
            >
              Sign up with Email
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={
                <Image src="/google.svg" width={20} height={20} alt="google" />
              }
              fullWidth
            >
              Sign up with Google
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={
                <Image src="/github.svg" width={20} height={20} alt="github" />
              }
            >
              Sign up with Github
            </Button>
          </Stack>

          <p className="text-center">
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
      </div>
    </Modal>
  );
};

export default SignUp;
