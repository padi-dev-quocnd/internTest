import React from 'react'
import Modal from '@mui/material/Modal';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalThunk } from '../ModalSlice';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ModalView() {
    const [animation, setAnimation] = useState('');
    const [display,setDisplay]=useState(false);
    const { visible, Component } = useSelector(state => state.modal);
    useEffect(()=>{
        setAnimation("animate__fadeIn")
    },[Component])
    useEffect(()=>{
        if(!visible){
            setAnimation("animate__fadeOut");
        }
        setTimeout(()=>{
            setDisplay(visible)
        },200)
    },[visible])
    const dispatch = useDispatch();
    const handleClose = () => {
            dispatch(closeModalThunk());
    }
    return (
        <Modal
            open={display}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition={true}
        >
            <Box sx={{ outline: 'none' }} className={`animate__animated  ${animation} absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4`}>
                {Component}
            </Box>
        </Modal>
    )
}
