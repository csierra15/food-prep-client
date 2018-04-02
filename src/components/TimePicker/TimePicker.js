import 'rc-time-picker/assets/index.css'
import React from 'react'
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';
const now = moment().hour(0).minute(0);

const TimePickerComponent = (props) => {
  return(
    <TimePicker
        showSecond={false}
        format={format}
        use12Hours
        minuteStep={15}
        inputReadOnly
        onChange={param => props.input.onChange(moment(param).format("hh:mm"))}
    />
  )
}

export default TimePickerComponent
