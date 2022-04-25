import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { useState } from "react";

export default function ModalComponent() {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    
    return (
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Welcome to
                    <Text b size={18}>
                        NextUI
                    </Text>
                </Text>
            </Modal.Header>
            <Modal.Body>
                <p>ANASHEEE</p>
                <Row justify="space-between">
                    <Checkbox>
                        <Text size={14}>Remember me</Text>
                    </Checkbox>
                    <Text size={14}>Forgot password?</Text>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onClick={closeHandler}>
                    Close
                </Button>
                <Button auto onClick={closeHandler}>
                    Sign in
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
