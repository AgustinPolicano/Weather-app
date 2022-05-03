import './home.css'
import { Image } from "@nextui-org/react";
import BgFirstEntry from "../../assets/imgs/ItsukishimaGateJapan-night.gif"
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import ModalContext from '../../context/modalContext';
import { useState } from 'react';
import dashboardImg from "../../assets/imgs/Dashboard.svg"
import { Link } from 'react-router-dom';



function FirstEntryHome() {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);



    const [checkbox, setCheckHandler] = useState (false)

    const handlerDialog = () => {
        setVisible(true);
        setCheckHandler(false)
    }

    const setChecKbox = () => {
        if(checkbox === true){
            setCheckHandler(false)
        } else {
            setCheckHandler(true)
        }
    }

    const closeHandler = () => {
        setVisible(false);
    };
    const text = "Almost before we knew it, we had left the ground.";
    return (
        <div className="bg-home">
            <div className='flex-home'>
            <div className='f64 title-home'>
                Weather App
                <div className='f16 subtitle-home'>
                    La aplicación que te muestra en tiempo real el clima segun tu ubicación
                </div>
                <Button color="secondary" auto className='button-edit' onClick={handlerDialog} >
                    ¿Comenzamos?
                </Button>
            </div>
            <div>
                <img src={dashboardImg} className="img-dashboard"/>
            </div>
            </div>
      


            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        <Text b size={18}>
                        Consentimiento de trackeo
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <p>Al proseguir aceptas que se trackee tu tu IPV4 para obtener los datos climaticos de tu zona </p>
                    <Row justify="space-between" onClick={setChecKbox}>
                        <Checkbox>
                            <Text size={14}>Aceptar</Text>
                        </Checkbox>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Cerrar
                    </Button>
                    <Link to="/weather">
                    <Button auto onClick={closeHandler} disabled={!checkbox}>
                        Comenzar
                    </Button>
                    </Link>
                </Modal.Footer>
            </Modal>

        </div>
    );
}



export default FirstEntryHome;