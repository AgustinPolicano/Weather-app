import './loadingComponent.css'
import { ipApi, weatherApi } from '../../services/services';
import React, { useEffect, useState } from 'react';
import { Loading, Spacer } from "@nextui-org/react";


export default function LoadingComponent() {



    return(
        <div className='center-loading'>
         <Loading size='xl' type='default'></Loading>
        </div>
    )

}