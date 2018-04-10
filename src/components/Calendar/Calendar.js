import React from 'react'
import { connect } from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './Calendar.css'
import { getMealInfo } from '../../actions'
import '../../stylesheets/float-grid.css'
require('react-big-calendar/lib/css/react-big-calendar.css')

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

function CustomToolbar(toolbar) {
  const goToDayView = () => {toolbar.onViewChange('day')}
  const goToWeekView = () => {toolbar.onViewChange('week')}
  const goToMonthView = () => {toolbar.onViewChange('month')}
  const goToBack = () => { toolbar.onNavigate('PREV') }
  const goToNext = () => { toolbar.onNavigate('NEXT') }
  const goToCurrent = () => { toolbar.onNavigate('TODAY') }
  const label = () => {
    const date = moment(toolbar.date);
    return (
      <h2>{date.format('MMMM')}<span> {date.format('YYYY')}</span></h2>
    )
  }

  return (
    <div className="toolbar-container">
      <div className="back-next-buttons col-4">
        <button className="toolbar-btn" onClick={goToBack}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className="toolbar-btn" onClick={goToCurrent}>Today</button>
        <button className="toolbar-btn" onClick={goToNext}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
      <label className='label-date col-4'>{label()}</label>
      <div className="view-buttons col-4">
        <button className="toolbar-btn" onClick={goToDayView}><span className="label-filter-off">Day</span></button>
        <button className="toolbar-btn" onClick={goToWeekView}><span className="label-filter-off">Week</span></button>
        <button className="toolbar-btn" onClick={goToMonthView}><span className="label-filter-off">Month</span></button>
      </div>
    </div>
  )
}

const Calendar = props => {
  return (
    <div id="bigCalendar">
      <BigCalendar
        popup
        ref={c => { this.bigCalendar = c } }
        selectable={true}
        events={props.events}
        defaultDate={new Date()}
        views={['month', 'week', 'day']}
        step={60}
        onSelectEvent={(info) => {
          props.dispatch(getMealInfo(info))
          window.location = '/view-meal'
        }}
        components={{
          toolbar: CustomToolbar
        }}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  events: state.user.events
})

export default connect(mapStateToProps)(Calendar)
