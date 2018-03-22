import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import events from './Events'
import './Calendar.css'
require('react-big-calendar/lib/css/react-big-calendar.css')

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const Calendar = props => (
  <div className="bigCalendar">
    <BigCalendar
      popup={true}
      selectable={true}
      events={events}
      views={allViews}
      startAccessor='start'
      endAccessor='end'
      step={60}
      onSelectSlot={(arg) => {
        console.log(arg);
      }}
    />
  </div>
)

export default Calendar
