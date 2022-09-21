import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function DatePicker2() {
  const [selectedDate, handleDateChange] = useState("");
  const { dateValue } = useSelector(state => state.datePicker);
  useEffect(() => {
    handleDateChange(dateValue)
  }, [dateValue])
  const handleValueDatePicker = (date) => {
    console.log()
  }
  
  const custom = (day, selectedDays, dayInCurrentMonth,dayComponent) => {
    let opacity = "";
    let style = "";
    let active = "";
  
  
    if (moment(day).format("MM") !== moment(selectedDays).format("MM")) {
      opacity = "opacity-40"
    }
    if (moment(day).format("MM/DD/YYYY") === moment(dateValue).format("MM/DD/YYYY")) {
      style = "inline-block bg-[#000] text-white w-[30px] h-[30px] leading-[30px] rounded-[50%]"
    }
    return <button className={`fnt-hansanN  w-full h-[46px] border border-[#0000001A] ${opacity} ${active} focus:bg-[#1DB48B] focus:text-white`} ><span className={style}>{moment(day).format("DD")}</span></button>
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker open={false} clearable={true}  value={selectedDate} renderDay={custom} />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker2;