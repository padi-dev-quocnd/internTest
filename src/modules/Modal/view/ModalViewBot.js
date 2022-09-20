import React from 'react'
import Modal from '@mui/material/Modal';
import '../style/style.css'
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalViewBotThunk } from '../ModalSlice';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ModalViewBot() {
    const [display, setDisplay] = useState(false);
    const { visibleInBot, CompnentModalViewBot } = useSelector(state => state.modal);

    useEffect(() => {
        setDisplay(visibleInBot)
    }, [visibleInBot])
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeModalViewBotThunk());
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
                <Box sx={{ outline: 'none' }} className={`absolute bottom-0 left-[50%] -translate-x-2/4`}>
                    {CompnentModalViewBot}
                </Box>
            </Modal>
        </div>
    )
}
