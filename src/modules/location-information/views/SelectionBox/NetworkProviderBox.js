import { optionsBanks } from 'constants/selectOptions';
import { setNetworkProviderThunk } from 'modules/location-information/locationSlice';
import { changeComponentThunk, closeModalInBotThunk } from 'modules/Modal/ModalSlice';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import CheckQualityNetwork from '../CheckQualityNetwork/CheckQualityNetwork';
export default function NetworkProviderBox({dataList,method}) {
    const dispatch = useDispatch();
    const {networkProvider} =useSelector(state=>state.location);
    const [valueSelect, setValueSelect] = useState('');
    const {PrevComponent} = useSelector(state => state.modal);
    useEffect(()=>{
        setValueSelect(networkProvider)
    },[])
    const handleClickOption=(value)=>{
        setValueSelect(value);  
    }
    const handleConfirm=()=>{
        dispatch(setNetworkProviderThunk(valueSelect));
        handleCloseModal();
      
    }
    const renderSelectList = () => {
        return optionsBanks.map((item, index) => {
            const {label,value}=item;
            let active = '';
            if (item == value) {
                active = 'font-bold text-[#000] bg-white'
            }
            return <button key={index} className={`fnt-hansanN text-[16px] py-[9px] w-full rounded-[10px] ${active} transition-all duration-200 hover:font-bold hover:text-[#000] hover:bg-white`} onClick={() => { handleClickOption(value) }}>{label}</button>
        })
    }
    const handleCloseModal=()=>{
        if(PrevComponent!==""){
            dispatch(changeComponentThunk(<CheckQualityNetwork/>))
        }
        dispatch(closeModalInBotThunk());
    }
    return (
        <div className='w-[375px] h-[239px] bg-[#E6E6E6] '>
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
