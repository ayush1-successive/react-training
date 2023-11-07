import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import "../Styles.css";

const Task11 = () => {
  const [modalState, setModalState] = useState(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button onClick={() => setModalState(true)}>Open modal</Button>
      <Modal
        open={modalState}
        onClose={() => setModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sample Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is Task-11 of React Assignment-4.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Task11;
