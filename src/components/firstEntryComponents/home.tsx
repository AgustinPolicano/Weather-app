import './home.css'
import { Image } from "@nextui-org/react";
import BgFirstEntry from "../../assets/imgs/ItsukishimaGateJapan-night.gif"
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import ModalContext from '../../context/modalContext';
import { useEffect, useState } from 'react';
import dashboardImg from "../../assets/imgs/Dashboard.svg"
import { Link, useLocation } from 'react-router-dom';
import { ipApi, weatherApi } from '../../services/services';
import { useNavigate } from 'react-router-dom';
import LoadingComponent from '../loadingComponent/loadingComponent';

function FirstEntryHome() {
    let navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const [lat, setLatitud] = useState('')
    const [long, setLongitud] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingText, setLoadingText] = useState('')
    const [temp, setTemp] = useState([])
    const [tempData, setTempData] = useState([])
    const [checkIsClick, setCheckIsClick] = useState(false)

    useEffect(() => {
    }, []);

    const getApi = () => {
        setLoading(true)
        ipApi.get('https://api.ipgeolocation.io/ipgeo?apiKey=471a22d27b1d4efcacf31cd2747cde65').then(resp => {
            const latitud = resp.data.latitude;
            const longitud = resp.data.longitude;
            weatherApi.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid=bc289ad8918259f14fa5c679a7760349&units=metric').then(resp => {
                setTemp(resp.data.main);
                setTempData(resp.data.weather)
            })
        })
        loadingFunc()
    }

    const loadingFunc = () => {
        setTimeout(() => {
            setLoading(false);
            navigate('/weather');
        }, 3000);

    }

    const checkIsComenzar = () => {
        setCheckIsClick(true)
    }

    const [checkbox, setCheckHandler] = useState(false)

    const handlerDialog = () => {
        setVisible(true);
        setCheckHandler(false)
    }

    const setChecKbox = () => {
        if (checkbox === true) {
            setCheckHandler(false)
        } else {
            setCheckHandler(true)
        }
    }

    const closeHandler = () => {
        setVisible(false);
    };

    return (
        <div className="bg-home">
            {loading === true &&
                <LoadingComponent></LoadingComponent>
            }
            {loading === false &&
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
                        <img src={dashboardImg} className="img-dashboard" />
                    </div>
                </div>
            }
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
                    <div onClick={setChecKbox}>
                        <Checkbox>
                            <Text size={14}>Aceptar</Text>
                        </Checkbox>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Cerrar
                    </Button>
                    <Button auto onClick={function (event) { closeHandler(); getApi() }} disabled={!checkbox}>
                        Comenzar
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}



export default FirstEntryHome;