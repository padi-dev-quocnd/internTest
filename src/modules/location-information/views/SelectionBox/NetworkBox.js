import { setNetworkThunk } from 'modules/location-information/locationSlice';
import { changeComponentThunk, closeModalThunk } from 'modules/Modal/ModalSlice';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
const networkLists = ['全て', '3G', '4G', '5G', 'Wifi'];
export default function NetWorkBox() {
    const dispatch = useDispatch();
    const {network} =useSelector(state=>state.location);
    const {PrevComponent} =useSelector(state=>state.modal)
    const [value, setValue] = useState('');
    useEffect(()=>{
        setValue(network)
    },[])
    const handleClickOption=(value)=>{
        setValue(value);  
    }
    const handleConfirm=()=>{
        dispatch(setNetworkThunk(value));
        if(PrevComponent!==''){
            dispatch(changeComponentThunk(PrevComponent));
            return;
        }
        handleCloseModal();
    }
    const renderSelectList = () => {
        return networkLists.map((item, index) => {
            let active = '';
            if (item == value) {
                active = 'font-bold text-[#000] bg-white'
            }
            return <button key={index} className={`fnt-hansanN text-[16px] text-grey py-[9px] w-full rounded-[10px] ${active} transition-all duration-200 hover:font-bold hover:text-[#000] hover:bg-white`} onClick={() => { handleClickOption(item) }}>{item}</button>
        })
    }
    const handleCloseModal=()=>{
        dispatch(closeModalThunk())
    }
    return (
        <div className='w-[375px] h-[239px] bg-[#E6E6E6] rounded-0 sm:rounded-[10px] '>
            <div className='h-[40px] px-[16px] py-[12px] flex justify-between items-center shadow-[0_0_0_2px_#0000001A]'>
                <button onClick={handleCloseModal}><MdClose /></button>
                <button className='fnt-hansanB text-green text-[16px]' onClick={handleConfirm}>完了</button>
            </div>
            <div className='h-[199px] p-[16px] '>
                <div className='overflow-y-scroll h-full'>
                    {renderSelectList()}
                </div>
            </div>
        </div>
    )
}
