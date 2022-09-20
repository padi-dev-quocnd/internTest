import { Slider } from '@mui/material';
import React, { useEffect } from 'react'
import { MdArrowDropDown, MdPause, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {changeComponentThunk, changeComponentViewBotThunk, changePrevComponentThunk } from 'modules/Modal/ModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import DatePicker from 'modules/DatePicker/view/DatePicker';
import { openDatePicker, setDateThunk } from 'modules/DatePicker/DatePickerSlices';
import NetWorkBox from '../SelectionBox/NetworkBox';
import NetworkProviderBox from '../SelectionBox/NetworkProviderBox';
export default function Control() {
    const {networkProvider,network} =useSelector(state=>state.location);
    const {dateValue} =useSelector(state=>state.datePicker);
    const dispatch =useDispatch();
    useEffect(()=>{
        const date =new Date();
        dispatch(setDateThunk(date )) 
    },[]);
    const handleOpenDatePicker = () => {
        dispatch(changeComponentThunk(<DatePicker/>));
        dispatch(openDatePicker())
        
    }
    const handleOpenSelectProvider=()=>{
        dispatch(changePrevComponentThunk(""))
        dispatch(changeComponentViewBotThunk(<NetworkProviderBox/>))
    }
    const handleOpenSelectNetwork=()=>{
        dispatch(changePrevComponentThunk(""))
        dispatch(changeComponentViewBotThunk(<NetWorkBox/>))
    }
    
  
    return (
        <div className='control w-full absolute bottom-0 px-[16px] py-[12px]'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
             
                    <button className='flex items-center ml-[5px] mr-[8px] fnt-hansanB text-[14px] ' onClick={handleOpenDatePicker}>{moment(dateValue).format("MM/DD")}<MdArrowDropDown className='text-[18px]' /></button> 
                    <span className='fnt-hansanM text-[14px]'>8:21</span>
                </div>
                <div className='flex items-center'>
                    <button className='flex items-center mr-[8px] fnt-hansanB text-[14px] mr-[20px]' onClick={handleOpenSelectProvider}>{networkProvider} <MdArrowDropDown className='text-[18px]' /></button>
                    <button className='flex items-center mr-[8px] fnt-hansanB text-[14px]' onClick={handleOpenSelectNetwork}>{network} <MdArrowDropDown className='text-[18px]' /></button>
                </div>
                <span className='text-[11px] text-[#6B6D6F] fnt-hansanN'>©︎Kri ltd</span>
            </div>
            <div className='mt-[14px] flex  items-center'>
                <div className='flex items-center'>
                    <button className='mr-[4px]'><MdPause className='text-[24px]' /></button>
                    <button className=''><MdSkipPrevious className='text-[24px]' /></button>
                    <button className='mr-[4px]'><MdSkipNext className='text-[24px]' /></button>
                </div>
                <div className='flex items-center w-full flex-col'>
                    <div className='relative w-full flex items-center'>
                        <Slider aria-label="Volume" value={30} />
                        <img className='absolute bottom-[-5px] w-full h-[5px]' src={require("../../../../assets/images/imgpsh_fullsize_anim.png")} />
                    </div>

                </div>
            </div>
            <div className='flex justify-between w-[89%] ml-auto'>
                <span className='fnt-hansanB text-[12px]'>7:00</span>
                <span className='fnt-hansanB text-[12px]'>12:21</span>
                <span className='fnt-hansanB text-[12px]'>19:00</span>
            </div>
        </div>
    )
}
