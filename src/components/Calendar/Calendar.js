import React from 'react'
import { connect } from 'react-redux'
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
        views={['month', 'day', 'week', 'agenda']}
        step={60}
        onSelectEvent={(info) => {
          props.dispatch(getMealInfo(info))
          props.triggerModal
        }}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  events: state.user.events,
  triggerModal: state.user.isOpen
})

export default connect(mapStateToProps)(Calendar)
