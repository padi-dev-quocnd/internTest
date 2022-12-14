import React, { createElement, useEffect, useState } from 'react'
import '../style/DatePicker.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { setDateThunk } from '../DatePickerSlices';
import { changeComponent, closeModalThunk } from 'modules/Modal/ModalSlice';
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { monthOfYear } from 'constants/monthOfYear';
export default function DatePickerS() {
  const [dateCurrent, setDateCurrent] = React.useState("");
  const { dateValue } = useSelector(state => state.datePicker);
  console.log(dateCurrent)
  useEffect(() => {
    setDateCurrent(dateValue)
  }, [dateValue])
  const dispatch = useDispatch();
  const handleClickPrevMonth=()=>{
      const monthCurrent=moment(dateCurrent).format("MMMM");
      const yearCurrent=moment(dateCurrent).format("YYYY");
      const position= monthOfYear.findIndex((month=>month===monthCurrent));
      if(position>0){
        setDateCurrent(`01 ${monthOfYear[position-1]} ${yearCurrent}`)
      }else{
        setDateCurrent(`01 ${monthOfYear[monthOfYear.length - 1]} ${yearCurrent - 1 }`)
      }

  }
  const handleClickNextMonth=()=>{
    const monthCurrent=moment(dateCurrent).format("MMMM");
    const yearCurrent=moment(dateCurrent).format("YYYY");
    const position= monthOfYear.findIndex((month=>month===monthCurrent));
    if(position<monthOfYear.length - 1){
      setDateCurrent(`01 ${monthOfYear[position+1]} ${yearCurrent}`)
    }else{
      let newYear=Number(yearCurrent) + 1
      setDateCurrent(`01 ${monthOfYear[0]} ${newYear }`)
    }

}
  const handleValueDatePicker = (newValue) => {
    setDateCurrent(newValue)
  }
  const handleCloseModal = () => {
    dispatch(closeModalThunk())
  }
  const handleConfirm = () => {
    dispatch(setDateThunk(dateCurrent));
    handleCloseModal();
  }

  const custom = (day, selectedDays, pickersDayProps) => {
    let opacity = "";
    let style = "";
    let active = "";
    const handleClick = () => {
      handleValueDatePicker(day.$d)
    }
    if (moment(day.$d).format("MM") !== moment(dateCurrent).format("MM")) {
      opacity = "opacity-40"
    }
    if (moment(day.$d).format("MM/DD/YYYY") === moment(dateValue).format("MM/DD/YYYY")) {
      style = "inline-block bg-[#000] text-white w-[30px] h-[30px] leading-[30px] rounded-[50%]"
    }
    return <button className={`fnt-hansanN  w-full h-[46px] border border-[#0000001A] ${opacity} ${active} focus:bg-[#1DB48B] focus:text-white`} onClick={handleClick}><span className={style}>{day.$D}</span></button>
  }
  const onMonthChange = (newMonth) => {
    console.log(newMonth)
    setDateCurrent(newMonth.$d)
  }
  const customToolbar = () => {
    return <div className='calender-title'><div className=' bg-[#E6E6E6] w-[375px]  h-[40px] w-full px-[16px] py-[12px] flex justify-between items-center shadow-[0_0_0_2px_#0000001A]'>
      <button onClick={handleCloseModal}><MdClose /></button>
      <button className='fnt-hansanB text-green text-[16px]' onClick={handleConfirm}>??????</button>
    </div>
    <div className='bg-[#f1f1f1] flex items-center justify-center gap-[10px] py-[20px]'>
        <button className='w-[24px] h-[24px] flex items-center justify-center'onClick={handleClickPrevMonth}><MdKeyboardArrowLeft className='text-[#6B6D6F]'/></button>
        <p className='fnt-hansanB'>{moment(dateCurrent).format("MMMM YYYY")}</p>
        <button className='w-[24px] h-[24px] flex items-center justify-center' onClick={handleClickNextMonth}><MdKeyboardArrowRight className='text-[#6B6D6F]'/></button>
    </div>
    </div>
  }
  const customDayOfWeek = (day) => { 
    const dayCurrent=day.toLowerCase();
    switch (dayCurrent){
      case "su":
        return <span className='fnt-hansanN'>???</span>
      case "mo":
        return <span className='fnt-hansanN'>???</span>
      case "tu":
        return <span className='fnt-hansanN'>???</span>
      case "we":
        return <span className='fnt-hansanN'>???</span>
      case "th":
        return <span className='fnt-hansanN'>???</span>
      case "fr":
        return <span className='fnt-hansanN'>???</span>
      case "sa":
        return <span className='fnt-hansanN'>???</span>
    }
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DesktopDatePicker
        label="Date desktop"
        closeOnSelect={true}
        inputFormat="MM/DD"
        value={dateCurrent}
        open={true}
        renderDay={custom}
        showToolbar={true}
        ToolbarComponent={customToolbar}
        onMonthChange={onMonthChange}
        dayOfWeekFormatter={customDayOfWeek}
        onYearChange={(year)=>{return moment(year.$d).format("DD/MM/YY")}}
        renderInput={({ inputProps }) => { return "" }}
      />
    </LocalizationProvider>
  )
}
