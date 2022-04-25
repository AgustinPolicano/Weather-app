import './home.css'
import { Image } from "@nextui-org/react";
import BgFirstEntry from "../../assets/imgs/ItsukishimaGateJapan-night.gif"
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import ModalContext from '../../context/modalContext';
import { useState } from 'react';




function FirstEntryHome() {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const text = "Almost before we knew it, we had left the ground.";
    return (
        <div className="bg-home">
            <div className='f48 title-home'>
                Weather App
                <p className='f16 subtitle-home'>
                    La aplicación que te muestra en tiempo real el clima segun tu ubicación
                </p>
                <Button color="secondary" auto className='button-edit' onClick={handler}>
                    ¿Comenzamos?
                </Button>
            </div>
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

        </div>
    );
}



export default FirstEntryHome;