import React from "react";
import { Modal, TextField, Box, Typography } from "@mui/material";
import { styles } from "./style";


const Login = (props) => {
  const { open, handleClose } = props;

  return (
    <>
      <Modal open={open} onClose={handleClose} style={styles.wrap}>
        <Box sx={styles.box}>
        <Typography variant="h4" sx={styles.title}>Login</Typography>
          <form onSubmit={handleClose}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
            />
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Login;

