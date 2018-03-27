import React from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import './Calendar.css'
require('react-big-calendar/lib/css/react-big-calendar.css')

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

//click event, show modal to edit/delete

const Calendar = props => (
  <div className="bigCalendar">
    <BigCalendar
      popup={true}
      selectable={true}
      drilldownView='agenda'
      events={props.events}
      views={['month', 'day', 'week', 'agenda']}
      startAccessor='start'
      endAccessor='end'
      step={60}
      onSelectSlot={(arg) => {
        //dispatch an action to put "arg" into the state
        console.log(arg)
      }}
      onSelectEvent={(arg) => {
        console.log(arg)
      }}
    />
  </div>
)

const mapStateToProps = (state) => ({
  events: state.user.events
})

export default connect(mapStateToProps)(Calendar)
