"use client";

import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  AlertColor,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { signIn } from "next-auth/react";
import Toast from "./Toast";

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
  const [message, setMessage] = React.useState("");
  const [showToast, toggleToast] = React.useState(false);
  const [toastType, setToastType] = React.useState<AlertColor>("warning");

  React.useEffect(() => {
    console.log("runs");
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const email = String(formData.get("email"));
      const password = String(formData.get("password"));

      // call next auth authorize method
      const response = await signIn("credentials", {
        email,
        password,
      });

      if (!response?.ok) {
        throw new Error(response!.error || "Invalid credentials");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message);
        toggleToast(true);
        setToastType("error");
      }
    }
  }

  return (
    <>
      <Modal open={isSignIn} onClose={() => toggleSignIn((open) => !open)}>
        <div className="bg-white center p-10 min-w-[400px] min-h-[500px] flex flex-col ">
          <IconButton
            className="self-end"
            onClick={() => toggleSignIn((open) => !open)}
          >
            <CloseIcon />
          </IconButton>

          <form onSubmit={onSubmit}>
            <Typography variant="h4" fontWeight={500} textAlign={"center"}>
              Welcome back.
            </Typography>

            <Stack spacing={3} mt={6}>
              <TextField
                label="Email"
                variant="standard"
                color="secondary"
                type="email"
                name="email"
                required
              />
              <TextField
                label="Password"
                variant="standard"
                color="secondary"
                type="password"
                name="password"
                required
              />
            </Stack>

            <Stack spacing={2} mt={8} mb={6}>
              {/* todo: loading button ? */}
              <Button
                variant="contained"
                size="large"
                type="submit"
                startIcon={<EmailOutlinedIcon />}
              >
                Sign in with Email
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={
                  <Image
                    src="/google.svg"
                    width={20}
                    height={20}
                    alt="google"
                  />
                }
                fullWidth
              >
                Sign in with Google
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={
                  <Image
                    src="/github.svg"
                    width={20}
                    height={20}
                    alt="github"
                  />
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
      <Toast
        showToast={showToast}
        toastType={toastType}
        toggleToast={toggleToast}
        message={message}
      />
    </>
  );
};

export default SignIn;
