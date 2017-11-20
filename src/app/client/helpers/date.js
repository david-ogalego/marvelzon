import moment from 'moment';

export default function getDateFormated(date) {
  return moment(date).format('YYYY-MM-DD');
}
