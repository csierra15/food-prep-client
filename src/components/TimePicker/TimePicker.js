import 'rc-time-picker/assets/index.css'
import React from 'react'
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';

const TimePickerComponent = (props) => {
  return(
    <TimePicker
        showSecond={false}
        format={format}
        use12Hours
        minuteStep={15}
        inputReadOnly
        placeholder={props.time}
        onChange={param => props.input.onChange(moment(param).format("hh:mm"))}
    />
  )
}

export default TimePickerComponent
