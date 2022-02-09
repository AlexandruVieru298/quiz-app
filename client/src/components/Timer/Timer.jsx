import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Timer = () => {

  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const deadline = new Date(new Date().getTime() + 20 * 60000);
  const timeinterval = useRef()
  const navigate = useNavigate();

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(endtime) {

    function updateClock() {
      const t = getTimeRemaining(endtime)

      setMinutes(('0' + t.minutes).slice(-2))
      setSeconds(('0' + t.seconds).slice(-2))

      if (t.total <= 0) {
        clearInterval(timeinterval.current)
        navigate("/Fail")
      }
    }

    updateClock()
    timeinterval.current = setInterval(updateClock, 1000)
  }

  useEffect(() => {
    initializeClock(deadline);
    return () => clearInterval(timeinterval.current)
  }, [])

  return (
    <div>{minutes}:{seconds}</div>
  )
}


export default Timer;