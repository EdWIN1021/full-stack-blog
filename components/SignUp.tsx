"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface SignUpProps {
  isSignUp: boolean;
  toggleSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ isSignUp, toggleSignUp }) => {
  return (
    <Modal open={isSignUp} onClose={() => toggleSignUp((open) => !open)}>
      <Box className="bg-white center">SignUp</Box>
    </Modal>
  );
};

export default SignUp;
