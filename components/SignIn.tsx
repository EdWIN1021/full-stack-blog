"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface SignInProps {
  isSignIn: boolean;
  toggleSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({ isSignIn, toggleSignIn }) => {
  return (
    <Modal open={isSignIn} onClose={() => toggleSignIn((open) => !open)}>
      <Box className="bg-white center">SignIn</Box>
    </Modal>
  );
};

export default SignIn;
