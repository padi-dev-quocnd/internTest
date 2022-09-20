import React, { createElement, useEffect, useState } from 'react'
import '../style/DatePicker.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { setDateThunk } from '../DatePickerSlices';
import { changeComponent, closeModalThunk } from 'modules/Modal/ModalSlice';
import { MdClose } from 'react-icons/md';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers';
export default function DatePickerS() {
  const [dateCurrent, setDateCurrent] = React.useState("");
  const { dateValue } = useSelector(state => state.datePicker);
  useEffect(() => {
    setDateCurrent(dateValue)
  }, [dateValue])
  const dispatch = useDispatch();
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
    setDateCurrent(newMonth.$d)
  }
  const customToolbar = () => {
    return <div className='calender-title bg-[#E6E6E6] w-[375px]  h-[40px] w-full px-[16px] py-[12px] flex justify-between items-center shadow-[0_0_0_2px_#0000001A]'>
      <button onClick={handleCloseModal}><MdClose /></button>
      <button className='fnt-hansanB text-green text-[16px]'onClick={handleConfirm}>完了</button>
    </div>
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
        renderInput={({ inputProps }) => { return "" }}
      />
    </LocalizationProvider>
  )
}
