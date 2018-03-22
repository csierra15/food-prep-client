import moment from 'moment';

const events = [
  {
    id: 0,
    title: 'Breakfast',
    start: moment('3/20/2018', "MM-DD-YYYY"),
    end: moment('3/20/2018', "MM-DD-YYYY"),
    desc: 'bacon, spinach, cheese omelette'
  },
  {
    id: 1,
    title: 'Morning Snack',
    start: moment('3/01/2018', "MM-DD-YYYY"),
    end: moment('3/01/2018', "MM-DD-YYYY"),
    desc: 'dried cranberries and nuts'
   }
]

export default events
