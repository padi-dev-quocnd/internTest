import { checkQualityNetworkThunk } from 'modules/location-information/locationSlice';
import { changeComponentThunk, closeModalThunk } from 'modules/Modal/ModalSlice';
import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import NetWorkBox from '../SelectionBox/NetworkBox';
import NetworkProviderBox from '../SelectionBox/NetworkProviderBox';

export default function CheckQualityNetwork() {
    const { networkProvider, network } = useSelector(state => state.location);
    const dispatch = useDispatch();
    const handleOpenSelectProvider = () => {
        dispatch(changeComponentThunk(<NetworkProviderBox />))
    }
    const handleOpenSelectNetwork = () => {
        dispatch(changeComponentThunk(<NetWorkBox />))
    }
    const handleCheckNetwork=()=>{
        dispatch(checkQualityNetworkThunk())
    }
    const handleCloseModal=()=>{
        dispatch(closeModalThunk())
    }
    return (
        <div className='w-[268px] h-[292px] rounded-[14px] bg-[#F2F2F2] overflow-hidden'>
            <div className='pt-[20px] px-[20px] pb-[28px]'>
                <h2 className='fnt-hansanB text-[16px] mb-[24px]'>使用中のキャリアと回線を選択してください。</h2>
                <button className='pb-[13px] w-full border-b border-[rgba(0,0,0,0.1)] flex justify-between mb-[10px]' onClick={handleOpenSelectProvider}>
                    <span className='fnt-hansanN text-[16px]'>キャリア</span>
                    <span className='fnt-hansanB text-[16px] flex items-center'>{networkProvider}<MdArrowDropDown className='text-[20px]' /></span>
                </button>
                <button className='pb-[13px] w-full border-b border-[rgba(0,0,0,0.1)] flex justify-between' onClick={handleOpenSelectNetwork}>
                    <span className='fnt-hansanN text-[16px]'>通信規格</span>
                    <span className='fnt-hansanB text-[16px] flex items-center'>{network}<MdArrowDropDown className='text-[20px]' /></span>
                </button>
            </div>
            <div>
                <button className='fnt-hansanN w-full py-[10px] text-[#000] transition-all duration-300 hover:font-bold hover:text-[#1DB48B] hover:bg-[rgba(23,144,112,.2)]' onClick={handleCheckNetwork}>測定に進む</button>
                <button className='fnt-hansanN w-full py-[10px] text-[#000] transition-all duration-300 hover:font-bold hover:text-[#1DB48B] hover:bg-[rgba(23,144,112,.2)]' onClick={handleCloseModal}>測定に進む</button>
            </div>
        </div>
    )
}
