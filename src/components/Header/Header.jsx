import './Header.scss';
import moment from 'moment';
import userIcon from '../../assets/images/user-icon.png';
import clockIcon from '../../assets/images/clock.png';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      let rawDate = new Date();

      let currentDate = moment(rawDate).format('DD MMM YYYY').toUpperCase();
      let currentTime = moment(rawDate).format('HH:mm');

      setDate(currentDate);
      setTime(currentTime);
    }, 0);
  }, []);

  return (
    <header className='header'>
      <a href='#' className='header__logo-and-title'>
        <img src={userIcon} alt='user-logo' className='header__logo' />
				<h3 className='header__title'>
					Inventory
				</h3>
			</a>
      <div className='header__date'>
        <span className='header__today'>Today</span>
        <span className='header__date'>{date}</span>
        <img src={clockIcon} alt='clock icon' className='header__clock-icon' />
				<span className='header__time'>{time}</span>
      </div>
    </header>
  );
};
