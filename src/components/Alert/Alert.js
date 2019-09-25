import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core/';

export default function Alert({
  open,
  onClose,
  onAction,
  title,
  text,
  primaryActionText,
  secondaryActionText,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='secondary'>
          {secondaryActionText}
        </Button>
        <Button onClick={onAction} color='primary' autoFocus>
          {primaryActionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

Alert.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onAction: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  primaryActionText: PropTypes.string,
  secondaryActionText: PropTypes.string,
};

Alert.defaultProps = {
  open: false,
  onClose: () => {},
  onAction: () => {},
  title: '',
  text: '',
  primaryActionText: 'Ok',
  secondaryActionText: 'Cancel',
};
