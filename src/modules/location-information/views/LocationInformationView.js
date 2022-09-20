import React from 'react'
import { MdMyLocation, MdHelpOutline, MdOutlineAvTimer } from "react-icons/md";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeComponentThunk, changePrevComponentThunk } from 'modules/Modal/ModalSlice';
import Alert from './Alter/Alert';
import CheckQualityNetwork from './CheckQualityNetwork/CheckQualityNetwork';
import Control from './Control/Control';
import ExtentInformation from './ExtentInformation/ExtentInformation';
import '../styles/LocationInformation.css'
import ModalView from '../../Modal/view/ModalView';
import mapPc from '../../../assets/images/mapPc.png'
import map from '../../../assets/images/map.png'
import ModalViewBot from 'modules/Modal/view/ModalViewBot';
export default function LocationInformationView() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    dispatch(changeComponentThunk(<Alert />))
  }, [])
  const handleOpenCheckQualityNetwork = () => {
    dispatch(changePrevComponentThunk(<CheckQualityNetwork />))
    dispatch(changeComponentThunk(<CheckQualityNetwork />))
  }
  const handleOpenHowToUse=()=>{
    navigate("/how-to-use")
  }
  return (
    <div className='relative' >
      <img className='hidden sm:block' src={mapPc} />
      <img className='block sm:hidden' src={map} />
      <button className='absolute top-[4px] left-[331px] w-[40px] h-[40px] backdrop-blur-[30px] bg-[#f4f4f8] flex items-center justify-center rounded-[50%] border-2 border-white sm:left-[623px]' onClick={handleOpenHowToUse}><MdHelpOutline className='text-[18px] text-grey' /></button>
      <div className='absolute left-[321px] top-[454px]   w-[40px] h-[40px]  bg-white flex justify-center items-center rounded-[50%] shadow-[0_30px_20px_grey] sm:left-[613px] sm:top-[171px]'><MdMyLocation className='w-[22px] h-[22px] text-black' /></div>
      <button className='absolute left-[313px] top-[500px] w-[56px] h-[56px] bg-[#D1D4D8] text-white border-2 border-white flex flex-col items-center justify-center rounded-[50%] border-2 border-white sm:top-[217px] sm:left-[605px] ' onClick={handleOpenCheckQualityNetwork}><MdOutlineAvTimer className='text-[22px]' /><span className='text-[11px] fnt-hansanB'>測定</span></button>
      <ExtentInformation />
      <Control />
      <ModalView />
      <ModalViewBot/>
    </div>
  )
}
