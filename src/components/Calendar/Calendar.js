import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import BigCalendar from 'react-big-calendar';
import moment from 'moment'
import './Calendar.css'
import { getMealInfo } from '../../actions'
require('react-big-calendar/lib/css/react-big-calendar.css')

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const Calendar = props => {
  return (
    <div className="bigCalendar">
      <BigCalendar
        popup={true}
        selectable={true}
        drilldownView='agenda'
        events={props.events}
        defaultDate={new Date()}
        views={['month', 'day', 'week', 'agenda']}
        step={60}
        onSelectEvent={(info) => {
          props.dispatch(getMealInfo(info))
          window.location = '/view-meal'
        }}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  events: state.user.events
})

export default connect(mapStateToProps)(Calendar)
