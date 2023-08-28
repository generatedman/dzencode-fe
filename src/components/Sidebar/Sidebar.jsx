import './Sidebar.scss';
import userPhoto from '../../assets/images/user-photo.jpg';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
	return (
    <section className='sidebar d-flex flex-column gap-3 align-items-center col-2'>
        <img src={userPhoto} alt='user photo' className='sidebar__user-photo' />
				<Link to='/orders' className='sidebar__link'>
					Orders
				</Link>
				<Link to='/products' className='sidebar__link'>
					Products
				</Link>
    </section>
  );
}