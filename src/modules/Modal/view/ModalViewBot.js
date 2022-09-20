import React from 'react'
import Modal from '@mui/material/Modal';
import '../style/style.css'
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalInBotThunk } from '../ModalSlice';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ModalViewBot() {
    const [animation, setAnimation] = useState('');
    const [display,setDisplay]=useState(false);
    const { visibleInBot, CompnentModalViewBot } = useSelector(state => state.modal);
    useEffect(()=>{
        setAnimation("animate__fadeIn")
    },[CompnentModalViewBot])
    useEffect(()=>{
        if(!visibleInBot){
            setAnimation("animate__fadeOut");
        }
        setTimeout(()=>{
            setDisplay(visibleInBot)
        },200)
    },[visibleInBot])
    const dispatch = useDispatch();
    const handleClose = () => {
            dispatch(closeModalInBotThunk());
    }
    return (
        <div className='modal2'>
        <Modal
            open={display}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition={true}
        >
            <Box sx={{ outline: 'none' }} className={`animate__animated  ${animation} absolute bottom-0 left-[50%] -translate-x-2/4`}>
                {CompnentModalViewBot}
            </Box>
        </Modal>
        </div>
    )
}
