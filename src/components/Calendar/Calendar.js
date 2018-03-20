import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Events from './Events'
import './Calendar.css'
require('react-big-calendar/lib/css/react-big-calendar.css')


let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const Calendar = props => (
  <div className="bigCalendar">
    <BigCalendar
      events={Events}
      views={allViews}
      step={60}
      startAccessor='startDate'
      endAccessor='endDate'
      selectable={true}
      onSelectSlot={(arg) => {
        console.log(arg);
      }}
    />
  </div>
)

export default Calendar
