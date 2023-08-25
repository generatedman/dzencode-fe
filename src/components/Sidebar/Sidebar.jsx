import './Sidebar.scss';
import userPhoto from '../../assets/images/user-photo.jpg';

export const Sidebar = () => {
	return (
    <section className='sidebar'>
      <div className='sideabr__user'>
        <img src={userPhoto} alt='user photo' className='sidebar__user-photo' />
      </div>
			<article className="sidebar__links">
				<a href="#" className='sidebar__link'>
					Orders
				</a>
				<a href="#" className='sidebar__link'>
					Products
				</a>
			</article>
    </section>
  );
}