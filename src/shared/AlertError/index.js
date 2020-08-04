import React from "react";
import PropTypes from "prop-types";
import {Snackbar} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const AlertError = ({error, handleClose}) => {
  return (
    <Snackbar
      open={!!error}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{horizontal: "right", vertical: "top"}}
    >
      <Alert onClose={handleClose} severity="error" variant="filled">
        {error}
      </Alert>
    </Snackbar>
  );
};

AlertError.propTypes = {
  error: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AlertError;
