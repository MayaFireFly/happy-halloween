import React, {useState, useEffect} from 'react';
import './Timer.css';
import moment from 'moment';
import PropTypes from 'prop-types';

const Timer = (props) => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const timeTillDate = props.timeTillDate; 

  useEffect(
    ()=>{
      setInterval(()=>{
        const then = moment(timeTillDate);
        const now = moment();
        const countdown = moment(then - now);
        setDays(countdown.format('D'));
        setHours(countdown.format('HH'));
        setMinutes(countdown.format('mm'));
        setSeconds(countdown.format('ss'));    
      }, 1000);     
    }    
  );

  return <div>
    <div className='countdown-wrapper'>
      <div className='countdown-item'>{days}</div>
      <div className='countdown-item'>{hours}</div>
      <div className='countdown-item'>{minutes}</div>
      <div className='countdown-item'>{seconds}</div>
    </div>    
  </div>;
};

Timer.propTypes = {
  timeTillDate:PropTypes.string
};

export default Timer;